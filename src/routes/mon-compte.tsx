import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  History,
  Users,
  Headphones,
  Info,
  LogOut,
} from "lucide-react";

export const Route = createFileRoute("/mon-compte")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "Mon compte — Speaker Invest" },
      {
        name: "description",
        content:
          "Votre espace Speaker Invest : solde du compte, revenus cumulés, recharge, retrait, historique et votre équipe.",
      },
      { property: "og:title", content: "Mon compte — Speaker Invest" },
      {
        property: "og:description",
        content:
          "Votre espace Speaker Invest : solde du compte, revenus cumulés, recharge, retrait, historique et votre équipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mon-compte" }],
  }),
});

const services = [
  { label: "Recharger", icon: ArrowDownToLine, to: "/recharger" as const },
  { label: "Retirer", icon: ArrowUpFromLine, to: "/retrait" as const },
  { label: "Historique", icon: History, to: "/mon-compte" as const },
  { label: "Mon équipe", icon: Users, to: "/equipe" as const },
];

const rules = [
  "Dépôt minimum : FCFA 3 000",
  "Retrait minimum : FCFA 1 500 · frais de retrait 20%",
  "Bonus d'inscription : FCFA 1 500",
  "Pointage quotidien : FCFA 100",
  "Revenu des packs : 25% par jour, crédité toutes les 24 heures",
  "Cycle des packs : 90 jours",
];

function AccountPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("speaker-invest-session");
    toast.success("Vous êtes déconnecté.");
    navigate({ to: "/auth" });
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6">
      {/* Top bar */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-foreground">Mon compte</h1>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Headphones className="h-4 w-4" />
          Service client
        </button>
      </div>

      {/* Profile card */}
      <section className="rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-5 text-primary-foreground shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold">Karlsen</h2>
            <p className="mt-1 text-sm text-primary-foreground/80">22872427790</p>
            <span className="mt-3 inline-flex rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold">
              VIP 2
            </span>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/25"
          >
            <LogOut className="h-4 w-4" />
            Quitter
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-primary-foreground/15 p-4">
            <p className="text-xs text-primary-foreground/80">Solde du compte</p>
            <p className="mt-1 font-display text-xl font-bold">FCFA 0</p>
          </div>
          <div className="rounded-xl bg-primary-foreground/15 p-4">
            <p className="text-xs text-primary-foreground/80">Revenus cumulés</p>
            <p className="mt-1 font-display text-xl font-bold">FCFA 100</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="glass-card mt-4 rounded-2xl p-5">
        <h2 className="font-display text-lg font-semibold text-foreground">Mes services</h2>
        <div className="mt-4 grid grid-cols-4 gap-3">
          {services.map(({ label, icon: Icon, to }) => (
            <Link key={label} to={to} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-medium text-foreground">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Rules */}
      <section className="glass-card mt-4 rounded-2xl p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
          <Info className="h-5 w-5 text-primary" />
          Réglementation
        </h2>
        <ul className="mt-3 space-y-2">
          {rules.map((rule) => (
            <li key={rule} className="text-sm text-muted-foreground">
              {rule}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
