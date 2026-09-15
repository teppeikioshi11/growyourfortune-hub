import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Wallet,
  Lock,
  Eye,
  EyeOff,
  Phone,
  FileClock,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/retrait")({
  component: RetraitPage,
  head: () => ({
    meta: [
      { title: "Retrait — Speaker Invest" },
      {
        name: "description",
        content:
          "Demandez le retrait de vos gains Speaker Invest vers votre portefeuille Mobile Money. Traitement rapide et sécurisé.",
      },
      { property: "og:title", content: "Retrait — Speaker Invest" },
      {
        property: "og:description",
        content:
          "Demandez le retrait de vos gains Speaker Invest vers votre portefeuille Mobile Money. Traitement rapide et sécurisé.",
      },
      { property: "og:url", content: "/retrait" },
    ],
    links: [{ rel: "canonical", href: "/retrait" }],
  }),
});

const retraitSchema = z.object({
  montant: z
    .number({ invalid_type_error: "Saisissez un montant valide" })
    .int("Le montant doit être un nombre entier")
    .min(1000, { message: "Le retrait minimum est de 1 000 FCFA" })
    .max(5000000, { message: "Le retrait maximum est de 5 000 000 FCFA" }),
  motDePasse: z
    .string()
    .min(6, { message: "Le mot de passe de transaction doit contenir au moins 6 caractères" })
    .max(64, { message: "Le mot de passe est trop long" }),
  telephone: z
    .string()
    .trim()
    .regex(/^[0-9\s]{8,12}$/, { message: "Numéro invalide (8 chiffres attendus)" }),
  devise: z.enum(["xof", "usdt"]),
});

function formatFcfa(v: number) {
  return v.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
}

function RetraitPage() {
  const [montant, setMontant] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [afficherMotDePasse, setAfficherMotDePasse] = useState(false);
  const [telephone, setTelephone] = useState("");
  const [devise, setDevise] = useState<"xof" | "usdt">("xof");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [envoye, setEnvoye] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = retraitSchema.safeParse({
      montant: Number(montant),
      motDePasse,
      telephone,
      devise,
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
    toast.success("Demande de retrait réussie");
  }

  if (envoye) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6">
        <div className="glass-card glow-border rounded-2xl p-8 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
            Demande de retrait réussie
          </h1>
          <p className="mt-3 text-muted-foreground">
            Votre retrait de{" "}
            <span className="font-semibold text-foreground">
              {formatFcfa(Number(montant))} FCFA
            </span>{" "}
            vers le portefeuille +228 {telephone} est en cours de traitement. Les fonds
            seront envoyés sur votre compte Mobile Money (généralement sous 24 heures).
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Retour à l'accueil
            </Link>
            <button
              type="button"
              onClick={() => {
                setEnvoye(false);
                setMontant("");
                setMotDePasse("");
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Nouveau retrait
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
          Demander un retrait
        </h1>
        <p className="mt-3 text-muted-foreground">
          Transférez vos gains vers votre portefeuille Mobile Money en quelques étapes.
        </p>
      </header>

      <section className="glass-card glow-border mt-8 rounded-2xl p-6">
        <form onSubmit={onSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="montant" className="text-sm font-medium text-foreground">
              Montant à retirer
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
                placeholder="Ex : 1300"
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <span className="text-xs font-medium text-muted-foreground">FCFA</span>
            </div>
            {errors.montant && (
              <p className="mt-2 text-xs text-destructive">{errors.montant}</p>
            )}
          </div>

          <div>
            <label htmlFor="motDePasse" className="text-sm font-medium text-foreground">
              Mot de passe de transaction
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <input
                id="motDePasse"
                type={afficherMotDePasse ? "text" : "password"}
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                placeholder="••••••"
                maxLength={64}
                autoComplete="off"
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setAfficherMotDePasse((v) => !v)}
                aria-label={afficherMotDePasse ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {afficherMotDePasse ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Défini lors de la création de votre compte, il sécurise chaque retrait.
            </p>
            {errors.motDePasse && (
              <p className="mt-2 text-xs text-destructive">{errors.motDePasse}</p>
            )}
          </div>

          <div>
            <label htmlFor="portefeuille" className="text-sm font-medium text-foreground">
              Numéro de portefeuille de retrait
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background/60 px-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">+228</span>
              <input
                id="portefeuille"
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="90 00 00 00"
                maxLength={12}
                className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Numéro Mobile Money qui recevra vos fonds (Flooz ou T-Money).
            </p>
            {errors.telephone && (
              <p className="mt-2 text-xs text-destructive">{errors.telephone}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Type de paiement</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {(
                [
                  { id: "xof", label: "XOF", sub: "FCFA — Mobile Money" },
                  { id: "usdt", label: "USDT", sub: "Crypto-monnaie" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setDevise(opt.id)}
                  aria-pressed={devise === opt.id}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    devise === opt.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background/40 hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      devise === opt.id ? "border-primary" : "border-muted-foreground/50"
                    }`}
                  >
                    {devise === opt.id && (
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {opt.label}
                    </span>
                    <span className="block text-xs text-muted-foreground">{opt.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Demander un retrait
          </button>
        </form>
      </section>

      <Link
        to="/"
        className="glass-card mt-6 flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:border-primary/40"
      >
        <span className="flex items-center gap-3 text-sm font-medium text-foreground">
          <FileClock className="h-5 w-5 text-primary" />
          Historique des retraits
        </span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>
    </div>
  );
}
