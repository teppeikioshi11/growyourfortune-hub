import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ArrowRight, Shield, BarChart3, Wallet, Clock, Target, Coins, ArrowDownToLine, History, Headphones, X } from "lucide-react";
import { useEffect, useState } from "react";
import speakerHomeBackground from "../assets/speaker-home-background.png.asset.json";

const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb97RCy11ulSByyRTE0c";
const TELEGRAM_CHANNEL_URL = "https://t.me/+hh2mZBbTIA9lZDM0";

function ChannelPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem("speaker-invest-channel-popup")) {
      setOpen(true);
    }
  }, []);

  const close = () => {
    window.sessionStorage.setItem("speaker-invest-channel-popup", "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm">
      <div className="glass-card glow-border relative w-full max-w-md rounded-2xl p-6 text-center sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Fermer"
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-accent"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
          Bienvenue sur Speaker Invest !
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Rejoignez nos chaînes officielles pour ne rien manquer : annonces, conseils et nouveautés.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          N'hésitez pas à contacter le service client en cas de problème.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Rejoindre la chaîne WhatsApp
          </a>
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#229ED9" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Rejoindre la chaîne Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: HomePage,
  beforeLoad: () => {
    if (typeof window !== "undefined" && !window.localStorage.getItem("speaker-invest-session")) {
      throw redirect({ to: "/auth" });
    }
  },
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
      <ChannelPopup />
      {/* Hero Bento Grid */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Main hero card */}
          <div className="glass-card glow-border relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-2xl p-6 md:col-span-2 md:p-10">
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
              src={speakerHomeBackground.url}
              alt="Enceinte portable Speaker Invest dans un intérieur musical"
              className="absolute inset-0 z-0 h-full w-full object-cover"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/80 to-background/10" />
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
          <QuickAction icon={<Coins className="h-6 w-6" />} label="Recharger" to="/recharger" />
          <QuickAction icon={<ArrowDownToLine className="h-6 w-6" />} label="Retrait" to="/retrait" />
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

function QuickAction({
  icon,
  label,
  sub,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  sub?: string;
  to?: "/recharger" | "/retrait";
}) {
  const className =
    "glass-card flex flex-col items-center justify-center gap-2 rounded-2xl p-5 text-center transition-colors hover:border-primary/40";
  const content = (
    <>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="font-display text-sm font-semibold text-foreground">{label}</span>
      {sub && <span className="text-xs text-muted-foreground">{sub}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {content}
    </button>
  );
}
