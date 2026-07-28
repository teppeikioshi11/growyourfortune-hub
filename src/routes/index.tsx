import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, TrendingUp, BarChart3, Wallet, Clock, Target, Coins, ArrowDownToLine, History, Headphones } from "lucide-react";
import heroBento from "../assets/hero-bento.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Speaker Invest — Investir dans les speakers" },
      { name: "description", content: "Investissez dans des speakers connectés et recevez un revenu journalier stable avec Speaker Invest." },
      { property: "og:title", content: "Speaker Invest — Investir dans les speakers" },
      { property: "og:description", content: "Investissez dans des speakers connectés et recevez un revenu journalier stable avec Speaker Invest." },

      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <div className="flex flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Bento Grid */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
          {/* Main hero card */}
          <div className="glass-card glow-border relative col-span-1 row-span-2 flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl p-6 md:col-span-2 md:row-span-2 md:p-8">
            <div className="relative z-10 max-w-xl">
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                Investissez avec clarté,{" "}
                <span className="text-gradient">prospérez avec confiance.</span>
              </h1>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Speaker Invest vous permet d'investir dans des speakers connectés et de percevoir un revenu journalier stable, en toute transparence.
              </p>
            </div>
            <div className="relative z-10 mt-6 flex flex-wrap gap-3">
              <Link
                to="/plans-investissement"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Découvrir les plans
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/mon-compte"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Ouvrir un compte
              </Link>
            </div>
            <img
              src={heroBento}
              alt="Visualisation de croissance financière"
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-30"
              width={1024}
              height={768}
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>

          {/* Stat card 1 */}
          <div className="glass-card flex flex-col justify-center rounded-2xl p-6">
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Performance moyenne</span>
            </div>
            <p className="mt-3 font-display text-4xl font-bold text-foreground">+8,4 %</p>
            <p className="mt-1 text-sm text-muted-foreground">annualisée sur 5 ans</p>
          </div>

          {/* Stat card 2 */}
          <div className="glass-card flex flex-col justify-center rounded-2xl p-6">
            <div className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Fonds sécurisés</span>
            </div>
            <p className="mt-3 font-display text-4xl font-bold text-foreground">98 %</p>
            <p className="mt-1 text-sm text-muted-foreground">sous mandat de protection</p>
          </div>

          {/* Feature card — Time */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-6">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">Suivi en temps réel</h3>
              <p className="mt-1 text-sm text-muted-foreground">Tableaux de bord et alertes personnalisées.</p>
            </div>
          </div>

          {/* Feature card — Target */}
          <div className="glass-card flex flex-col justify-between rounded-2xl p-6">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">Objectifs clairs</h3>
              <p className="mt-1 text-sm text-muted-foreground">Stratégies alignées sur vos projets de vie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <QuickAction icon={<Coins className="h-6 w-6" />} label="Recharger" />
          <QuickAction icon={<ArrowDownToLine className="h-6 w-6" />} label="Retrait" />
          <QuickAction icon={<History className="h-6 w-6" />} label="Historique" sub="des transactions" />
          <QuickAction icon={<Headphones className="h-6 w-6" />} label="Service client" />
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Pourquoi choisir Speaker Invest ?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Une approche discrétionnaire rigoureuse, des outils digitaux modernes et une équipe dédiée à votre réussite patrimoniale.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Allocation intelligente"
            description="Diversification entre actions, obligations, immobilier et actifs alternatifs selon votre profil de risque."
          />
          <ValueCard
            icon={<Wallet className="h-6 w-6" />}
            title="Frais transparents"
            description="Pas de commissions cachées : une tarification claire sur la gestion et la performance."
          />
          <ValueCard
            icon={<Shield className="h-6 w-6" />}
            title="Risque maîtrisé"
            description="Surveillance continue, rééquilibrage automatique et analyses de scénarios."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="glass-card glow-border rounded-2xl p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Prêt à faire travailler votre capital ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Ouvrez un compte en ligne en quelques minutes et accédez à nos plans d'investissement dès aujourd'hui.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/mon-compte"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Créer mon compte
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/vos-produits"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Voir les produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 transition-colors hover:border-primary/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function QuickAction({ icon, label, sub }: { icon: React.ReactNode; label: string; sub?: string }) {
  return (
    <button
      type="button"
      className="glass-card flex flex-col items-center justify-center gap-2 rounded-2xl p-5 text-center transition-colors hover:border-primary/40"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="font-display text-sm font-semibold text-foreground">{label}</span>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </button>
  );
}
