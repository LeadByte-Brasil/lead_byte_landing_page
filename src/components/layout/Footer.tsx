import { LogoLeadByte } from "@/components/icons/LogoLeadByte";
import { Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  produtos: [
    { label: "LB-Nexus", href: "#" },
    { label: "LB-Automata", href: "#" },
    { label: "LB-Pulse", href: "#" },
  ],
  recursos: [
    { label: "Blog", href: "#" },
    { label: "Documentação", href: "#" },
    { label: "API", href: "#" },
  ],
  empresa: [
    { label: "Sobre", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Contato", href: "#contato" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "LGPD", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border-subtle">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <LogoLeadByte className="h-8 w-8 text-accent-cyan" />
              <span className="font-display font-bold text-lg text-foreground">
                Lead<span className="text-accent-cyan">Byte</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              O Sistema Operacional de Receita para times de alta performance. Unifique prospecção, atendimento e vendas.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-accent-cyan hover:bg-secondary transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-technical font-semibold text-foreground mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-technical font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-technical font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-technical font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Lead Byte. Sistema Operacional de Receita.
          </p>
          <p className="text-text-muted text-xs">
            Feito com 💜 para times de alta performance
          </p>
        </div>
      </div>
    </footer>
  );
};
