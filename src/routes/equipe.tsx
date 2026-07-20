import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Twitter } from "lucide-react";
import teamCeo from "../assets/team-ceo.jpg";
import teamCio from "../assets/team-cio.jpg";
import teamAnalyst from "../assets/team-analyst.jpg";
import teamAdvisor from "../assets/team-advisor.jpg";

export const Route = createFileRoute("/equipe")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Équipe — Aurora Capital" },
      { name: "description", content: "Rencontrez l'équipe Aurora Capital : experts en gestion de patrimoine, analyse financière et conseil en investissement." },
      { property: "og:title", content: "Équipe — Aurora Capital" },
      { property: "og:description", content: "Rencontrez l'équipe Aurora Capital : experts en gestion de patrimoine, analyse financière et conseil en investissement." },
      { property: "og:url", content: "/equipe" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
});

const team = [
  {
    name: "Claire Durand",
    role: "Présidente & CEO",
    bio: "Ancienne directrice d'une grande banque privée, elle a fondé Aurora Capital pour démocratiser l'investissement de qualité institutionnelle.",
    image: teamCeo,
  },
  {
    name: "Marc Lefèvre",
    role: "Chief Investment Officer",
    bio: "20 ans d'expérience en gestion multi-actifs. Il supervise l'allocation et la sélection des fonds et des valeurs mobilières.",
    image: teamCio,
  },
  {
    name: "Sofia Benali",
    role: "Responsable Analyse & Données",
    bio: "Docteure en économétrie, elle développe les modèles de scoring et les outils de pilotage du risque de la plateforme.",
    image: teamAnalyst,
  },
  {
    name: "Thomas Moreau",
    role: "Directeur Conseil Clients",
    bio: "Spécialiste du conseil patrimonial, il accompagne les clients dans la construction de leur stratégie sur mesure.",
    image: teamAdvisor,
  },
];

const values = [
  {
    title: "Transparence",
    description: "Nous communiquons clairement sur les frais, les performances et les risques.",
  },
  {
    title: "Rigueur",
    description: "Chaque décision d'investissement repose sur des analyses quantitatives et qualitatives.",
  },
  {
    title: "Proximité",
    description: "Un conseiller dédié suit chaque client dans la durée, avec réactivité et écoute.",
  },
];

function TeamPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Notre équipe
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Des experts passionnés unis par une mission : faire de la gestion de patrimoine une expérience accessible, transparente et performante.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="glass-card overflow-hidden rounded-2xl transition-colors hover:border-primary/30"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                width={512}
                height={512}
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-lg font-semibold text-foreground">{member.name}</h2>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`Twitter de ${member.name}`}
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="glass-card rounded-2xl p-6 text-center">
            <h3 className="font-display text-lg font-semibold text-foreground">{value.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
