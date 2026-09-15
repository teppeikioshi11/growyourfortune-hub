import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, KeyRound, Phone, User, Gift, ShieldCheck, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  head: () => ({
    meta: [
      { title: "Inscription & connexion — Speaker Invest" },
      { name: "description", content: "Créez votre compte Speaker Invest ou connectez-vous pour investir dans des speakers et suivre vos revenus journaliers." },
      { property: "og:title", content: "Inscription & connexion — Speaker Invest" },
      { property: "og:description", content: "Créez votre compte Speaker Invest ou connectez-vous pour investir dans des speakers et suivre vos revenus journaliers." },
      { property: "og:url", content: "/auth" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/auth" }],
  }),
});

const COUNTRIES = [
  { code: "+228", label: "🇹🇬 Togo (+228)" },
  { code: "+226", label: "🇧🇫 Burkina Faso (+226)" },
  { code: "+225", label: "🇨🇮 Côte d'Ivoire (+225)" },
  { code: "+229", label: "🇧🇯 Bénin (+229)" },
  { code: "+221", label: "🇸🇳 Sénégal (+221)" },
  { code: "+223", label: "🇲🇱 Mali (+223)" },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-secondary/40 py-3 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"register" | "login">("register");
  const [country, setCountry] = useState("+228");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [invite, setInvite] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[0-9\s]{8,}$/.test(phone.trim())) {
      toast.error("Veuillez saisir un numéro de téléphone valide.");
      return;
    }
    if (password.length < 6) {
      toast.error("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }
    if (mode === "register" && password !== confirm) {
      toast.error("Les deux mots de passe ne correspondent pas.");
      return;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("speaker-invest-session", "1");
    }
    toast.success(mode === "register" ? "Inscription réussie" : "Connexion réussie");
    navigate({ to: "/" });
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-col px-4 py-8">
      <div className="flex items-center justify-center gap-2 text-foreground">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <TrendingUp className="h-5 w-5" />
        </div>
        <span className="font-display text-xl font-bold tracking-tight">Speaker Invest</span>
      </div>

      <div className="glass-card glow-border mt-6 rounded-2xl p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-secondary/40 p-1">
          {(["register", "login"] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {m === "register" ? "S'inscrire" : "Connexion"}
            </button>
          ))}
        </div>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country" className="mb-1 block text-sm font-medium text-foreground">Pays</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-xl border border-input bg-secondary/40 px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>{c.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-foreground">Numéro de téléphone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Veuillez saisir votre numéro de téléphone"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-foreground">Mot de passe de connexion</label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe de connexion"
                className={fieldClass}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {mode === "register" && (
            <>
              <div>
                <label htmlFor="confirm" className="mb-1 block text-sm font-medium text-foreground">Confirmer le mot de passe</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="confirm"
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Répéter le mot de passe"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pseudo" className="mb-1 block text-sm font-medium text-foreground">Pseudo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="pseudo"
                    type="text"
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    placeholder="Saisissez votre pseudo"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="invite" className="mb-1 block text-sm font-medium text-foreground">Code d'invitation</label>
                <div className="relative">
                  <Gift className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="invite"
                    type="text"
                    value={invite}
                    onChange={(e) => setInvite(e.target.value.toUpperCase())}
                    placeholder="Code du parrain"
                    className={`${fieldClass} uppercase tracking-wider`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="otp" className="mb-1 block text-sm font-medium text-foreground">Code de vérification (OTP)</label>
                <div className="relative">
                  <ShieldCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Code OTP"
                    className={`${fieldClass} pr-20`}
                  />
                  <button
                    type="button"
                    onClick={() => toast.info("Envoi du code OTP bientôt disponible.")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {mode === "register" ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
        </p>
      </div>
    </div>
  );
}
