import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const clientLogos = [
  { name: "TechCorp", opacity: 0.4 },
  { name: "StartupXYZ", opacity: 0.4 },
  { name: "Enterprise Co", opacity: 0.4 },
  { name: "SaaS Pro", opacity: 0.4 },
  { name: "Growth Inc", opacity: 0.4 },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Radial Glow */}
      <div className="absolute inset-0 radial-glow" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-deep-purple/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-electric-blue/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Novo: LB-Automata com IA Generativa
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6"
          >
            O Sistema Operacional de Receita para{" "}
            <span className="bg-gradient-to-r from-accent-cyan via-primary to-primary-electric-blue bg-clip-text text-transparent">
              Times de Alta Performance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Unifique prospecção, atendimento e vendas em uma única interface.
            Construa pipelines previsíveis, não apenas conversas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="btn-gradient px-8 py-6 text-lg rounded-full animate-pulse-glow"
            >
              Agendar Demo Gratuita
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-border-subtle hover:border-accent-cyan hover:text-accent-cyan bg-transparent"
            >
              Ver Funcionalidades
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-border-subtle/50"
          >
            <p className="text-sm text-text-muted mb-6">
              Empresas que confiam no Lead Byte
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {clientLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="font-technical font-semibold text-lg text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#produtos"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent-cyan transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
