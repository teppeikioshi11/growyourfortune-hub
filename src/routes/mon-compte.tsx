import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Boxes,
  ChevronRight,
  CircleAlert,
  Headphones,
  History,
  Home,
  ListChecks,
  LogOut,
  Package,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mon-compte")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "Mon compte — Speaker Invest" },
      { name: "description", content: "Connectez-vous à votre espace client Speaker Invest pour suivre vos investissements, consulter vos rapports et gérer votre profil." },
      { property: "og:title", content: "Mon compte — Speaker Invest" },
      { property: "og:description", content: "Consultez votre solde, vos revenus et les services de votre compte Speaker Invest." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mon-compte" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mon-compte" }],
  }),
});

function AccountPage() {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("speaker-invest-session");
    navigate({ to: "/auth" });
  };

  return (
    <div className="min-h-screen bg-account-page pb-24 text-card-foreground">
      <header className="border-b border-border/40 bg-account-card">
        <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 text-card-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-account-primary text-account-primary-foreground">
              <TrendingUp className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">Speaker <span className="text-account-primary">Invest</span></span>
          </Link>
          <Button asChild className="rounded-full bg-account-primary text-account-primary-foreground hover:bg-account-primary/90">
            <a href="https://t.me/+hh2mZBbTIA9lZDM0" target="_blank" rel="noreferrer">
              <Headphones /> Service client
            </a>
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-7 sm:px-6">
        <section className="account-banner rounded-[2rem] p-7 text-account-primary-foreground sm:p-9" aria-labelledby="account-title">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 id="account-title" className="text-2xl font-bold sm:text-3xl">Mon compte</h1>
              <p className="mt-1 text-sm opacity-90">+228 —</p>
              <span className="mt-4 inline-flex rounded-full bg-account-primary-foreground/20 px-4 py-1.5 text-sm font-semibold">VIP 0</span>
            </div>
            <Button
              type="button"
              onClick={logout}
              className="rounded-full bg-card-foreground/20 text-account-primary-foreground hover:bg-card-foreground/30"
            >
              <LogOut /> Quitter
            </Button>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-account-primary-foreground/15 p-4 sm:p-5">
              <p className="text-sm opacity-85">Solde du compte</p>
              <p className="mt-1 text-xl font-bold sm:text-2xl">FCFA 0</p>
            </div>
            <div className="rounded-3xl bg-account-primary-foreground/15 p-4 sm:p-5">
              <p className="text-sm opacity-85">Revenus cumulés</p>
              <p className="mt-1 text-xl font-bold sm:text-2xl">FCFA 0</p>
            </div>
          </div>
        </section>

        <section className="account-shadow rounded-[2rem] bg-account-card p-6 sm:p-8" aria-labelledby="services-title">
          <h2 id="services-title" className="text-xl font-bold sm:text-2xl">Mes services</h2>
          <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-5">
            <ServiceLink to="/recharger" icon={<ArrowDownToLine />} label="Recharger" />
            <ServiceLink to="/retrait" icon={<ArrowUpFromLine />} label="Retirer" />
            <ServiceButton icon={<History />} label="Historique" onClick={() => toast.info("Aucune transaction pour le moment.")} />
            <ServiceLink to="/equipe" icon={<Users />} label="Mon équipe" />
          </div>
        </section>

        <section className="account-shadow rounded-[2rem] bg-account-card p-6 sm:p-8" aria-labelledby="rules-title">
          <div className="flex items-center gap-2">
            <CircleAlert className="h-5 w-5 text-account-primary" />
            <h2 id="rules-title" className="text-xl font-bold">Réglementation</h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>Dépôt minimum : <strong className="font-semibold text-card-foreground">FCFA 3 000</strong></li>
            <li>Retrait minimum : <strong className="font-semibold text-card-foreground">FCFA 1 500</strong> · frais de retrait 20%</li>
            <li>Bonus d'inscription : <strong className="font-semibold text-card-foreground">FCFA 1 500</strong></li>
            <li>Pointage quotidien : <strong className="font-semibold text-card-foreground">FCFA 100</strong></li>
            <li>Revenu des packs : <strong className="font-semibold text-card-foreground">25% par jour</strong>, crédité toutes les 24 heures</li>
            <li>Cycle des packs : <strong className="font-semibold text-card-foreground">90 jours</strong></li>
          </ul>
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-account-card" aria-label="Navigation principale">
        <div className="mx-auto grid h-20 max-w-4xl grid-cols-5">
          <BottomLink to="/" icon={<Home />} label="Accueil" />
          <BottomLink to="/vos-produits" icon={<Package />} label="Produits" />
          <BottomLink to="/plans-investissement" icon={<ListChecks />} label="Plans" />
          <BottomLink to="/equipe" icon={<Users />} label="Équipe" />
          <BottomLink to="/mon-compte" icon={<UserRound />} label="Compte" active />
        </div>
      </nav>
    </div>
  );
}

type AppPath = "/" | "/recharger" | "/retrait" | "/equipe" | "/vos-produits" | "/plans-investissement" | "/mon-compte";

function ServiceLink({ to, icon, label }: { to: AppPath; icon: React.ReactNode; label: string }) {
  return (
    <Link to={to} className="flex min-w-0 flex-col items-center gap-2 text-center text-card-foreground">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-account-primary text-account-primary-foreground [&_svg]:h-6 [&_svg]:w-6 sm:h-16 sm:w-16">
        {icon}
      </span>
      <span className="text-xs font-semibold sm:text-sm">{label}</span>
    </Link>
  );
}

function ServiceButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <Button type="button" variant="ghost" onClick={onClick} className="h-auto min-w-0 flex-col gap-2 p-0 text-card-foreground hover:bg-transparent">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-account-primary text-account-primary-foreground [&_svg]:h-6 [&_svg]:w-6 sm:h-16 sm:w-16">
        {icon}
      </span>
      <span className="text-xs font-semibold sm:text-sm">{label}</span>
    </Button>
  );
}

function BottomLink({ to, icon, label, active = false }: { to: AppPath; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={`flex min-w-0 flex-col items-center justify-center gap-1 text-xs font-semibold ${active ? "text-account-primary" : "text-muted-foreground"}`}
    >
      <span className="[&_svg]:h-6 [&_svg]:w-6">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
