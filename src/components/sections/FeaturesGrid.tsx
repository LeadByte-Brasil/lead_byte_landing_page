import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Bot, Search, BarChart3, MessageSquare, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Distribuição Algorítmica",
    description: "Leads são atribuídos baseados em performance, não ordem de chegada.",
    color: "text-accent-amber",
  },
  {
    icon: Bot,
    title: "Hand-off Inteligente",
    description: "Contexto completo preservado na transição bot→humano.",
    color: "text-accent-magenta",
  },
  {
    icon: Search,
    title: "Enriquecimento de Dados",
    description: "CNPJ, faturamento, setor - tudo automático em tempo real.",
    color: "text-accent-cyan",
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Machine Learning prevê probabilidade de fechamento.",
    color: "text-accent-emerald",
  },
  {
    icon: MessageSquare,
    title: "Multi-Canal Unificado",
    description: "WhatsApp, IG, LinkedIn, Email - uma interface.",
    color: "text-primary-electric-blue",
  },
  {
    icon: Shield,
    title: "Compliance Automático",
    description: "Gestão de consentimento LGPD built-in.",
    color: "text-accent-cyan",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const FeaturesGrid = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="recursos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Funcionalidades que{" "}
            <span className="bg-gradient-to-r from-primary-deep-purple to-primary-electric-blue bg-clip-text text-transparent">
              Resolvem Dores Reais
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada recurso foi pensado para eliminar gargalos operacionais e acelerar o ciclo de vendas.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border-subtle/50 bg-card/30 hover:bg-card/60 hover:border-border-interactive/50 transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-secondary/50 mb-4 ${feature.color}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
