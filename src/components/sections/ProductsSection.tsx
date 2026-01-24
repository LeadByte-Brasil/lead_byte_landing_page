import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconNexus, IconAutomata, IconPulse } from "@/components/icons/ProductIcons";

const products = [
  {
    id: "nexus",
    icon: IconNexus,
    name: "LB-Nexus",
    tagline: "Omnichannel",
    badge: "Core",
    badgeColor: "bg-accent-cyan/20 text-accent-cyan",
    description:
      "Centro de comando que unifica WhatsApp, Instagram, LinkedIn e E-mail com distribuição inteligente de leads baseada em performance.",
    features: ["Multi-canal unificado", "Distribuição algorítmica", "Histórico completo"],
  },
  {
    id: "automata",
    icon: IconAutomata,
    name: "LB-Automata",
    tagline: "Bot & IA Inteligente",
    badge: "AI-Powered",
    badgeColor: "bg-accent-magenta/20 text-accent-magenta",
    description:
      "Agentes autônomos que qualificam leads 24/7 e fazem hand-off inteligente para humanos preservando todo o contexto da conversa.",
    features: ["Qualificação automática", "Hand-off inteligente", "Contexto preservado"],
  },
  {
    id: "pulse",
    icon: IconPulse,
    name: "LB-Pulse",
    tagline: "SDR Digital",
    badge: "Automation",
    badgeColor: "bg-accent-amber/20 text-accent-amber",
    description:
      "Máquina de prospecção ativa com enriquecimento de dados nativo. CNPJ, faturamento, setor - tudo automático em tempo real.",
    features: ["Prospecção ativa", "Enriquecimento de dados", "Análise preditiva"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const ProductsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="produtos" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            A Trindade <span className="text-accent-cyan neon-text">Lead Byte</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três pilares integrados que transformam como sua equipe gera receita.
            Prospecção, automação e atendimento em harmonia perfeita.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group relative glass-card-hover rounded-2xl p-8 overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-technical font-semibold ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <product.icon className="w-16 h-16 text-accent-cyan transition-all duration-300 group-hover:drop-shadow-[0_0_15px_hsl(var(--accent-cyan)/0.5)]" />
              </div>

              {/* Content */}
              <h3 className="font-technical font-bold text-2xl text-foreground mb-1">
                {product.name}
              </h3>
              <p className="text-accent-cyan font-medium text-sm mb-4">{product.tagline}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-cyan hover:text-foreground transition-colors animated-underline"
              >
                Saiba mais
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-accent-cyan/10 via-transparent to-primary/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
