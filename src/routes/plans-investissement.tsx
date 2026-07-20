import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Leaf, Rocket, Crown, Gem } from "lucide-react";

export const Route = createFileRoute("/plans-investissement")({
  component: PlansPage,
  head: () => ({
    meta: [
      { title: "Plans d'investissement — Aurora Capital" },
      { name: "description", content: "Comparez nos plans d'investissement : Starter, Growth, Premium et Privé. Trouvez celui qui correspond à votre profil et à vos objectifs." },
      { property: "og:title", content: "Plans d'investissement — Aurora Capital" },
      { property: "og:description", content: "Comparez nos plans d'investissement : Starter, Growth, Premium et Privé. Trouvez celui qui correspond à votre profil et à vos objectifs." },
      { property: "og:url", content: "/plans-investissement" },
    ],
    links: [{ rel: "canonical", href: "/plans-investissement" }],
  }),
});

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: <Leaf className="h-6 w-6" />,
    description: "Idéal pour débuter avec un capital modeste et apprendre les fondamentaux de l'investissement.",
    minInvest: "1 000 €",
    targetReturn: "+4 à 6 %",
    risk: "Modéré",
    features: ["Portefeuille diversifié", "Rééquilibrage trimestriel", "Rapport mensuel", "Support par email"],
    cta: "Choisir Starter",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    icon: <Rocket className="h-6 w-6" />,
    description: "Pour les investisseurs actifs cherchant une croissance patrimoniale soutenue.",
    minInvest: "10 000 €",
    targetReturn: "+6 à 9 %",
    risk: "Équilibré",
    features: ["Allocation dynamique", "Rééquilibrage mensuel", "Rapport détaillé", "Conseiller dédié", "Alertes marché"],
    cta: "Choisir Growth",
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    icon: <Crown className="h-6 w-6" />,
    description: "Stratégie patrimoniale complète avec des actifs alternatifs et une fiscalité optimisée.",
    minInvest: "100 000 €",
    targetReturn: "+8 à 12 %",
    risk: "Élevé maîtrisé",
    features: ["Gestion discrétionnaire", "Actifs alternatifs", "Optimisation fiscale", "Conseiller senior", "Rapport hebdomadaire"],
    cta: "Choisir Premium",
    featured: false,
  },
  {
    id: "prive",
    name: "Privé",
    icon: <Gem className="h-6 w-6" />,
    description: "Accès exclusif à des opportunités sur mesure : private equity, immobilier premium et structures dédiées.",
    minInvest: "500 000 €",
    targetReturn: "Sur mesure",
    risk: "Sur mesure",
    features: ["Mandat personnalisé", "Investissements exclusifs", "Comité d'investissement", "Family office light", "Disponibilité 24/7"],
    cta: "Nous contacter",
    featured: false,
  },
];

function PlansPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Plans d'investissement
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Des solutions adaptées à chaque étape de votre parcours patrimonial. Choisissez le plan qui correspond à votre capital, votre horizon et votre appétence au risque.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl p-6 ${
              plan.featured
                ? "glass-card glow-border border-primary/40"
                : "glass-card border border-border/50"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Le plus populaire
              </span>
            )}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {plan.icon}
            </div>
            <h2 className="mt-4 font-display text-xl font-bold text-foreground">{plan.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <div className="mt-4 space-y-2 border-t border-border/50 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Investissement minimum</span>
                <span className="font-medium text-foreground">{plan.minInvest}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rendement visé</span>
                <span className="font-medium text-foreground">{plan.targetReturn}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profil de risque</span>
                <span className="font-medium text-foreground">{plan.risk}</span>
              </div>
            </div>
            <ul className="mt-4 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/mon-compte"
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                plan.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-border bg-background/50 text-foreground hover:bg-accent"
              }`}
            >
              {plan.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-indigo-mid/30 p-6 text-center md:p-8">
        <p className="text-sm text-muted-foreground">
          Les rendements présentés sont des estimations historiques ou cibles et ne constituent pas une garantie de performance future. Les investissements comportent des risques, y compris de perte en capital.
        </p>
      </div>
    </div>
  );
}
