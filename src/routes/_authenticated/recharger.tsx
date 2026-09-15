import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Copy, Phone, Hash, Wallet, CheckCircle2, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/_authenticated/recharger")({
  component: RechargerPage,
  head: () => ({
    meta: [
      { title: "Recharger mon compte — Speaker Invest" },
      {
        name: "description",
        content:
          "Rechargez votre compte Speaker Invest par Mobile Money (Flooz ou T-Money) et validez votre dépôt en quelques minutes.",
      },
      { property: "og:title", content: "Recharger mon compte — Speaker Invest" },
      {
        property: "og:description",
        content:
          "Rechargez votre compte Speaker Invest par Mobile Money (Flooz ou T-Money) et validez votre dépôt en quelques minutes.",
      },
      { property: "og:url", content: "/recharger" },
    ],
    links: [{ rel: "canonical", href: "/recharger" }],
  }),
});

const OPERATEURS = [
  { id: "flooz", nom: "Flooz (Moov)", numero: "96 00 00 00", titulaire: "SPEAKER INVEST" },
  { id: "tmoney", nom: "T-Money (Togocom)", numero: "90 00 00 00", titulaire: "SPEAKER INVEST" },
] as const;

const MONTANTS = [3500, 5000, 10000, 20000, 50000, 100000];

const depotSchema = z.object({
  montant: z
    .number({ invalid_type_error: "Saisissez un montant valide" })
    .int("Le montant doit être un nombre entier")
    .min(1000, { message: "Le dépôt minimum est de 1 000 FCFA" })
    .max(5000000, { message: "Le dépôt maximum est de 5 000 000 FCFA" }),
  operateur: z.enum(["flooz", "tmoney"], { message: "Choisissez un opérateur" }),
  telephone: z
    .string()
    .trim()
    .regex(/^[0-9\s]{8,12}$/, { message: "Numéro invalide (8 chiffres attendus)" }),
  reference: z
    .string()
    .trim()
    .min(4, { message: "La référence doit contenir au moins 4 caractères" })
    .max(40, { message: "La référence est trop longue" }),
});

function formatFcfa(v: number) {
  return v.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
}

function RechargerPage() {
  const [montant, setMontant] = useState("");
  const [operateur, setOperateur] = useState<"flooz" | "tmoney">("flooz");
  const [telephone, setTelephone] = useState("");
  const [reference, setReference] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [envoye, setEnvoye] = useState(false);

  const operateurActif = OPERATEURS.find((o) => o.id === operateur)!;

  function copier(valeur: string) {
    navigator.clipboard?.writeText(valeur);
    toast.success("Numéro copié");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = depotSchema.safeParse({
      montant: Number(montant),
      operateur,
      telephone,
      reference,
    });

    if (!result.success) {
      const map: Record<string, string> = {};
      for (const issue of result.error.issues) {
        map[String(issue.path[0])] = issue.message;
      }
      setErrors(map);
      toast.error("Veuillez corriger les champs indiqués");
      return;
    }

    setErrors({});
    setEnvoye(true);
    toast.success("Dépôt soumis : il sera crédité après vérification.");
  }

  if (envoye) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
        <div className="glass-card glow-border rounded-2xl p-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
            Dépôt enregistré
          </h1>
          <p className="mt-3 text-muted-foreground">
            Votre dépôt de{" "}
            <span className="font-semibold text-foreground">
              {formatFcfa(Number(montant))} FCFA
            </span>{" "}
            via {operateurActif.nom} est en cours de vérification. Votre solde sera crédité
            dès confirmation du paiement (généralement sous 30 minutes).
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/plans-investissement"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voir les plans
            </Link>
            <button
              type="button"
              onClick={() => {
                setEnvoye(false);
                setMontant("");
                setReference("");
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Nouveau dépôt
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour à l'accueil
      </Link>

      <header className="mt-6">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Recharger mon compte
        </h1>
        <p className="mt-3 text-muted-foreground">
          Effectuez votre dépôt par Mobile Money, puis renseignez la référence de la
          transaction pour créditer votre solde.
        </p>
      </header>

      {/* Étape 1 — Envoyer l'argent */}
      <section className="glass-card mt-8 rounded-2xl p-6">
        <h2 className="font-display text-lg font-semibold text-foreground">
          1. Envoyez le montant
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {OPERATEURS.map((op) => (
            <button
              key={op.id}
              type="button"
              onClick={() => setOperateur(op.id)}
              className={`rounded-xl border p-4 text-left transition-colors ${
                operateur === op.id
                  ? "border-primary bg-primary/10"
                  : "border-border bg-background/40 hover:border-primary/40"
              }`}
            >
              <span className="block text-sm font-semibold text-foreground">{op.nom}</span>
              <span className="mt-1 block text-xs text-muted-foreground">
                Dépôt instantané
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-background/40 p-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Numéro à créditer
            </p>
            <p className="font-display text-xl font-bold text-foreground">
              +228 {operateurActif.numero}
            </p>
            <p className="text-xs text-muted-foreground">
              Titulaire : {operateurActif.titulaire}
            </p>
          </div>
          <button
            type="button"
            onClick={() => copier(`+228${operateurActif.numero.replace(/\s/g, "")}`)}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Copy className="h-4 w-4" />
            Copier
          </button>
        </div>
      </section>

      {/* Étape 2 — Confirmer */}
      <section className="glass-card glow-border mt-6 rounded-2xl p-6">
        <h2 className="font-display text-lg font-semibold text-foreground">
          2. Confirmez votre dépôt
        </h2>

        <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
          <div>
            <label htmlFor="montant" className="text-sm font-medium text-foreground">
              Montant du dépôt (FCFA)
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3">
              <Wallet className="h-4 w-4 text-muted-foreground" />
              <input
                id="montant"
                type="number"
                inputMode="numeric"
                min={1000}
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                placeholder="Ex : 10000"
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {MONTANTS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMontant(String(m))}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {formatFcfa(m)}
                </button>
              ))}
            </div>
            {errors.montant && (
              <p className="mt-2 text-xs text-destructive">{errors.montant}</p>
            )}
          </div>

          <div>
            <label htmlFor="telephone" className="text-sm font-medium text-foreground">
              Numéro utilisé pour le paiement
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">+228</span>
              <input
                id="telephone"
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="90 00 00 00"
                maxLength={12}
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            {errors.telephone && (
              <p className="mt-2 text-xs text-destructive">{errors.telephone}</p>
            )}
          </div>

          <div>
            <label htmlFor="reference" className="text-sm font-medium text-foreground">
              Référence de la transaction
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3">
              <Hash className="h-4 w-4 text-muted-foreground" />
              <input
                id="reference"
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="Ex : TM240915.1032.A12345"
                maxLength={40}
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Code reçu par SMS après votre paiement Mobile Money.
            </p>
            {errors.reference && (
              <p className="mt-2 text-xs text-destructive">{errors.reference}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Valider mon dépôt
          </button>
        </form>
      </section>
    </div>
  );
}
