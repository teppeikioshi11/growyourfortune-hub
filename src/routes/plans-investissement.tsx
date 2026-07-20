import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import labubuAsset from "../assets/labubu.jpg.asset.json";

export const Route = createFileRoute("/plans-investissement")({
  component: PlansPage,
  head: () => ({
    meta: [
      { title: "Plans d'investissement — Aurora Capital" },
      { name: "description", content: "Découvrez nos plans d'investissement accessibles à partir de 3 500 FCFA et générez un revenu journalier stable jusqu'à 9 500 FCFA/jour." },
      { property: "og:title", content: "Plans d'investissement — Aurora Capital" },
      { property: "og:description", content: "Découvrez nos plans d'investissement accessibles à partir de 3 500 FCFA et générez un revenu journalier stable jusqu'à 9 500 FCFA/jour." },
      { property: "og:url", content: "/plans-investissement" },
    ],
    links: [{ rel: "canonical", href: "/plans-investissement" }],
  }),
});

const plans = [
  {
    id: "labubu",
    name: "Labubu",
    description: "Le plan de bienvenue. Une première expérience simple et abordable pour commencer à recevoir un revenu journalier.",
    invest: "3 500 FCFA",
    dailyReturn: "300 FCFA/jour",
    image: labubuAsset.url,
    features: ["Investissement unique : 3 500 FCFA", "Revenu journalier : 300 FCFA", "Versement automatique quotidien", "Retrait simplifié"],
    cta: "Choisir Labubu",
    featured: true,
  },
  {
    id: "classique",
    name: "Classique",
    description: "Un plan équilibré pour construire un complément de revenu régulier avec un capital modéré.",
    invest: "5 000 FCFA",
    dailyReturn: "450 FCFA/jour",
    features: ["Investissement unique : 5 000 FCFA", "Revenu journalier : 450 FCFA", "Versement automatique quotidien", "Retrait simplifié"],
    cta: "Choisir Classique",
    featured: false,
  },
  {
    id: "evolution",
    name: "Évolution",
    description: "Pour les investisseurs qui souhaitent accélérer leur rendement quotidien avec un capital accessible.",
    invest: "10 000 FCFA",
    dailyReturn: "950 FCFA/jour",
    features: ["Investissement unique : 10 000 FCFA", "Revenu journalier : 950 FCFA", "Versement automatique quotidien", "Retrait prioritaire"],
    cta: "Choisir Évolution",
    featured: false,
  },
  {
    id: "confort",
    name: "Confort",
    description: "Un revenu journalier significatif pour compléter sereinement vos revenus au quotidien.",
    invest: "20 000 FCFA",
    dailyReturn: "1 900 FCFA/jour",
    features: ["Investissement unique : 20 000 FCFA", "Revenu journalier : 1 900 FCFA", "Versement automatique quotidien", "Retrait prioritaire"],
    cta: "Choisir Confort",
    featured: false,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Le plan privilégié pour un complément de revenu journalier élevé et un suivi personnalisé.",
    invest: "50 000 FCFA",
    dailyReturn: "4 750 FCFA/jour",
    features: ["Investissement unique : 50 000 FCFA", "Revenu journalier : 4 750 FCFA", "Versement automatique quotidien", "Accompagnement prioritaire"],
    cta: "Choisir Premium",
    featured: false,
  },
  {
    id: "excellence",
    name: "Excellence",
    description: "Notre plan phare pour les investisseurs exigeants qui visent un rendement journalier maximal.",
    invest: "100 000 FCFA",
    dailyReturn: "9 500 FCFA/jour",
    features: ["Investissement unique : 100 000 FCFA", "Revenu journalier : 9 500 FCFA", "Versement automatique quotidien", "Accompagnement dédié"],
    cta: "Choisir Excellence",
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
          Investissez une fois et recevez un revenu journalier stable. Choisissez le montant qui correspond à vos objectifs.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col overflow-hidden rounded-2xl ${
              plan.featured
                ? "glass-card glow-border border-primary/40"
                : "glass-card border border-border/50"
            }`}
          >
            {plan.featured && (
              <span className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Le plus populaire
              </span>
            )}
            {plan.image && (
              <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
                <img
                  src={plan.image}
                  alt="Labubu"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-xl font-bold text-foreground">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4 space-y-2 border-t border-border/50 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Investissement</span>
                  <span className="font-medium text-foreground">{plan.invest}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenu journalier</span>
                  <span className="font-semibold text-primary">{plan.dailyReturn}</span>
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
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border/50 bg-indigo-mid/30 p-6 text-center md:p-8">
        <p className="text-sm text-muted-foreground">
          Les revenus présentés sont des estimations indicatives. Les investissements comportent des risques, y compris de perte en capital. Pensez toujours à diversifier votre épargne et à ne pas investir plus que vous ne pouvez perdre.
        </p>
      </div>
    </div>
  );
}
