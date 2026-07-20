import { Link } from "@tanstack/react-router";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Accueil" },
  { to: "/plans-investissement", label: "Plans d'investissement" },
  { to: "/vos-produits", label: "Vos produits" },
  { to: "/equipe", label: "Équipe" },
  { to: "/mon-compte", label: "Mon compte" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-indigo-deep">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">Aurora Capital</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Stratégies d'investissement claires et performantes pour faire fructifier votre patrimoine.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                contact@aurora-capital.fr
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                12 Avenue de l'Opéra, 75001 Paris
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">Informations</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Mentions légales</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Politique de confidentialité</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Conditions d'utilisation</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Risques et transparence</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aurora Capital. Tous droits réservés. Les investissements comportent des risques.
          </p>
        </div>
      </div>
    </footer>
  );
}
