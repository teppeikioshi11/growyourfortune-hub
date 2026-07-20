import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PieChart, Building2, Coins, Sprout, Briefcase, TrendingUp, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/vos-produits")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Vos produits — Aurora Capital" },
      { name: "description", content: "Découvrez nos produits d'investissement : actions, obligations, immobilier, ESG, private equity et fonds diversifiés." },
      { property: "og:title", content: "Vos produits — Aurora Capital" },
      { property: "og:description", content: "Découvrez nos produits d'investissement : actions, obligations, immobilier, ESG, private equity et fonds diversifiés." },
      { property: "og:url", content: "/vos-produits" },
    ],
    links: [{ rel: "canonical", href: "/vos-produits" }],
  }),
});

const products = [
  {
    id: "actions",
    name: "Actions & ETFs",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Accès aux marchés mondiaux via une sélection d'actions, d'ETFs thématiques et d'indices sectoriels.",
    tags: ["Liquidité", "Croissance", "Dividendes"],
  },
  {
    id: "obligations",
    name: "Obligations",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Stabilité et revenus réguliers avec des obligations souveraines, d'entreprises et obligations vertes.",
    tags: ["Stabilité", "Revenus", "Diversification"],
  },
  {
    id: "immobilier",
    name: "Immobilier",
    icon: <Building2 className="h-6 w-6" />,
    description: "SCPI, foncières cotées et dette immobilière pour un rendement potentiel et une inflation naturelle.",
    tags: ["Patrimoine", "Revenus", "Diversification"],
  },
  {
    id: "crypto",
    name: "Cryptomonnaies",
    icon: <Coins className="h-6 w-6" />,
    description: "Allocation prudentielle sur les actifs numériques majeurs via des fonds régulés et sécurisés.",
    tags: ["Innovation", "Volatilité", "Allocation cible"],
  },
  {
    id: "esg",
    name: "Impact & ESG",
    icon: <Sprout className="h-6 w-6" />,
    description: "Investissez dans des entreprises et projets à impact positif, notés selon des critères ESG exigeants.",
    tags: ["Impact", "Durable", "Responsable"],
  },
  {
    id: "private",
    name: "Private Equity",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Accès exclusif au capital-investissement dans des entreprises en croissance, via des fonds sélectionnés.",
    tags: ["Exclusivité", "Long terme", "Croissance"],
  },
];

function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Vos produits
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Une palette complète de produits financiers sélectionnés et surveillés par nos équipes pour composer des portefeuilles équilibrés.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="glass-card flex flex-col rounded-2xl p-6 transition-colors hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {product.icon}
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{product.name}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Allocation example */}
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3">
            <PieChart className="h-6 w-6 text-primary" />
            <h2 className="font-display text-xl font-semibold text-foreground">Exemple d'allocation Growth</h2>
          </div>
          <div className="mt-6 space-y-4">
            <AllocationRow label="Actions & ETFs" value={45} />
            <AllocationRow label="Obligations" value={20} />
            <AllocationRow label="Immobilier" value={15} />
            <AllocationRow label="Impact & ESG" value={10} />
            <AllocationRow label="Cryptomonnaies" value={5} />
            <AllocationRow label="Liquidité" value={5} />
          </div>
        </div>

        <div className="glass-card glow-border flex flex-col justify-center rounded-2xl p-6 md:p-8">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Besoin d'une allocation personnalisée ?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nos conseillers analysent votre situation et construisent une stratégie sur mesure, en tenant compte de votre horizon, votre fiscalité et vos valeurs.
          </p>
          <Link
            to="/mon-compte"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Échanger avec un conseiller
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function AllocationRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-foreground">{label}</span>
        <span className="font-medium text-primary">{value} %</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-border/50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-indigo-bright"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
