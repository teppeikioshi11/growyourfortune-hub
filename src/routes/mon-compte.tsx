import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Shield, Phone } from "lucide-react";

export const Route = createFileRoute("/mon-compte")({
  component: AccountPage,
  head: () => ({
    meta: [
      { title: "Mon compte — Aurora Capital" },
      { name: "description", content: "Connectez-vous à votre espace client Aurora Capital pour suivre vos investissements, consulter vos rapports et gérer votre profil." },
      { property: "og:title", content: "Mon compte — Aurora Capital" },
      { property: "og:description", content: "Connectez-vous à votre espace client Aurora Capital pour suivre vos investissements, consulter vos rapports et gérer votre profil." },
      { property: "og:url", content: "/mon-compte" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mon-compte" }],
  }),
});

function AccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Mon compte
          </h1>
          <p className="mt-4 text-muted-foreground">
            Accédez à votre espace personnel pour suivre la performance de vos portefeuilles, télécharger vos rapports et échanger avec votre conseiller.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Sécurité renforcée</h3>
                <p className="text-sm text-muted-foreground">Authentification forte et chiffrement de vos données personnelles.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <User className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Conseiller dédié</h3>
                <p className="text-sm text-muted-foreground">Contactez votre gestionnaire directement depuis la messagerie sécurisée.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">Rapports mensuels</h3>
                <p className="text-sm text-muted-foreground">Recevez des analyses détaillées et des recommandations personnalisées.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Form card */}
        <div className="glass-card glow-border rounded-2xl p-6 md:p-8">
          <div className="flex gap-4 border-b border-border/50 pb-4">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`text-sm font-semibold transition-colors ${
                mode === "login" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Connexion
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`text-sm font-semibold transition-colors ${
                mode === "register" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Créer un compte
            </button>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Connexion simulée — l'intégration backend n'est pas configurée.");
            }}
          >
            {mode === "register" && (
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-foreground">
                  Nom complet
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full rounded-md border border-input bg-background/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-foreground">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@exemple.com"
                  className="w-full rounded-md border border-input bg-background/50 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-foreground">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-input bg-background/50 py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {mode === "login" ? "Se connecter" : "Créer mon compte"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}
