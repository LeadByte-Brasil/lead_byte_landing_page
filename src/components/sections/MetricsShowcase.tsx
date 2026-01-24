import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TrendingUp, Clock, Users, Target } from "lucide-react";

const metrics = [
  {
    icon: Target,
    value: 1247,
    suffix: "",
    label: "Leads Ativos",
    trend: "+12%",
    trendUp: true,
    color: "text-accent-cyan",
  },
  {
    icon: TrendingUp,
    value: 34.2,
    suffix: "%",
    decimals: 1,
    label: "Taxa de Conversão",
    trend: "+5.1%",
    trendUp: true,
    color: "text-accent-emerald",
  },
  {
    icon: Clock,
    value: 2.3,
    suffix: "min",
    decimals: 1,
    label: "Tempo Médio Resposta",
    trend: "-18%",
    trendUp: true,
    color: "text-accent-amber",
  },
  {
    icon: Users,
    value: 89,
    suffix: "%",
    label: "Satisfação do Cliente",
    trend: "+3%",
    trendUp: true,
    color: "text-accent-magenta",
  },
];

export const MetricsShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="metricas" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 radial-glow opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Métricas que{" "}
              <span className="text-accent-cyan neon-text">Importam</span>,
              <br />
              Visualizadas com Clareza
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Dashboard em tempo real que transforma dados complexos em insights acionáveis.
              Acompanhe a performance do seu time com métricas que realmente impactam receita.
            </p>

            <ul className="space-y-4">
              {[
                "Taxa de Conversão em Tempo Real",
                "Distribuição de Performance por SDR",
                "Heatmap de Horários de Melhor Resposta",
                "Previsão de Pipeline com IA",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-cyan to-primary-electric-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Card */}
            <div className="glass-card rounded-2xl p-6 lg:p-8 border border-border-subtle">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-technical font-semibold text-foreground">Dashboard Overview</h3>
                  <p className="text-sm text-muted-foreground">Última atualização: agora</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span className="text-xs text-accent-emerald font-medium">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-secondary/30 rounded-xl p-4 border border-border-subtle/30"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                      <span
                        className={`text-xs font-medium ${
                          metric.trendUp ? "text-accent-emerald" : "text-destructive"
                        }`}
                      >
                        {metric.trend}
                      </span>
                    </div>
                    <div className="font-technical font-bold text-2xl lg:text-3xl text-foreground mb-1">
                      <AnimatedCounter
                        value={metric.value}
                        suffix={metric.suffix}
                        decimals={metric.decimals || 0}
                        duration={2500}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Mini Chart Placeholder */}
              <div className="mt-6 pt-6 border-t border-border-subtle/30">
                <div className="flex items-end justify-between h-16 gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${height}%` } : { height: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary-deep-purple/50 to-accent-cyan/50"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-muted-foreground">Jan</span>
                  <span className="text-xs text-muted-foreground">Dez</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-deep-purple/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
