import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, ChevronRight, Copy, Check, Share2, TrendingUp, Wallet } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Mon équipe — Aurora Capital" },
      { name: "description", content: "Consultez votre équipe de parrainage Aurora Capital sur 3 niveaux, vos commissions et partagez votre code d'invitation." },
      { property: "og:title", content: "Mon équipe — Aurora Capital" },
      { property: "og:description", content: "Consultez votre équipe de parrainage Aurora Capital sur 3 niveaux et vos commissions." },
      { property: "og:url", content: "/equipe" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
});

const levels = [
  {
    level: 1,
    title: "Mon équipe de premier niveau",
    description: "Les personnes que vous avez directement invitées.",
    contribution: "0 FCFA",
    rate: "20%",
    people: 0,
  },
  {
    level: 2,
    title: "Mon équipe de deuxième niveau",
    description: "Les invités de vos filleuls de niveau 1.",
    contribution: "0 FCFA",
    rate: "2%",
    people: 0,
  },
  {
    level: 3,
    title: "Mon équipe de troisième niveau",
    description: "Les invités de vos filleuls de niveau 2.",
    contribution: "0 FCFA",
    rate: "1%",
    people: 0,
  },
];

function TeamPage() {
  const inviteCode = "AURORA2024";
  const [copied, setCopied] = useState(false);

  const totalPeople = levels.reduce((sum, l) => sum + l.people, 0);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Mon équipe
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Invitez vos proches à rejoindre Aurora Capital et gagnez une commission
          sur chacun de leurs investissements — sur 3 niveaux de parrainage.
        </p>
      </div>

      {/* Résumé */}
      <div className="glass-card mb-6 rounded-2xl p-5">
        <div className="mb-4 flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h2 className="font-display text-base font-semibold text-foreground">
            Détails de l'équipe
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-display text-2xl font-bold text-foreground">{totalPeople}</p>
            <p className="text-xs text-muted-foreground">Total de personnes</p>
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-foreground">0 FCFA</p>
            <p className="text-xs text-muted-foreground">Revenu total</p>
          </div>
        </div>
      </div>

      {/* Niveaux */}
      <div className="space-y-4">
        {levels.map((lvl) => (
          <div key={lvl.level} className="glass-card rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                Niv.{lvl.level}
              </span>
              <h3 className="font-display text-sm font-semibold text-foreground md:text-base">
                {lvl.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-1 text-foreground">
                  <Wallet className="h-3.5 w-3.5 text-muted-foreground" />
                  <p className="font-display text-base font-semibold">
                    {lvl.contribution}
                  </p>
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">Contribution cumulée</p>
              </div>
              <div>
                <div className="flex items-center gap-1 text-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
                  <p className="font-display text-base font-semibold">{lvl.rate}</p>
                </div>
                <p className="text-xs text-muted-foreground">Taux de commission</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{lvl.people}</span>{" "}
                <span className="text-muted-foreground">Personnes</span>
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Vérifier
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Méthode d'invitation */}
      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2">
          <Share2 className="h-4 w-4 text-primary" />
          <h2 className="font-display text-base font-semibold text-foreground">
            Méthode d'invitation
          </h2>
        </div>

        <div className="glass-card glow-border rounded-2xl p-5">
          <p className="mb-2 text-sm text-foreground">
            Code d'invitation{" "}
            <span className="text-xs text-muted-foreground">
              (Cliquez pour copier)
            </span>
          </p>
          <button
            type="button"
            onClick={copyCode}
            className="flex w-full items-center justify-between rounded-lg border border-dashed border-primary/40 bg-primary/5 px-4 py-3 text-left transition-colors hover:bg-primary/10"
          >
            <span className="font-display text-xl font-bold tracking-widest text-primary">
              {inviteCode}
            </span>
            {copied ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                <Check className="h-4 w-4" /> Copié
              </span>
            ) : (
              <Copy className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Partagez ce code à vos proches. Dès qu'ils s'inscrivent avec, ils
            rejoignent votre équipe et vous gagnez une commission sur chacun de
            leurs investissements.
          </p>
        </div>
      </div>
    </div>
  );
}
