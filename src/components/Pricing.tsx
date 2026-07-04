import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Check, Sparkles, Crown, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Roll Básico',
    emoji: '⚡',
    icon: Zap,
    price: '$99.990',
    description: 'Ideal para empezar tu presencia digital con estilo.',
    features: [
      'Landing page a medida',
      'Diseño responsive (mobile-first)',
      'Hasta 3 secciones',
      'Formulario de contacto',
      'Optimización SEO básica',
      'Entrega en 5-7 días',
    ],
    cta: 'Cotizar Gratis',
    popular: false,
    gradient: 'from-zinc-800 to-zinc-900',
  },
  {
    name: 'Menú Completo',
    emoji: '🔥',
    icon: Sparkles,
    price: '$299.990',
    description: 'Para negocios que necesitan una web profesional completa.',
    features: [
      'Sitio web multipágina',
      'Panel de administración',
      'Blog integrado',
      'SEO avanzado',
      'Integración redes sociales',
      'Hosting primer año incluido',
      'Soporte por 3 meses',
      'Dominio .cl incluido',
    ],
    cta: 'El Más Pedido',
    popular: true,
    gradient: 'from-coral to-amber',
  },
  {
    name: 'Omakase Digital',
    emoji: '👑',
    icon: Crown,
    price: 'A medida',
    description: 'El chef elige lo mejor para tu proyecto. Sin límites.',
    features: [
      'App web o móvil custom',
      'Arquitectura full stack',
      'Base de datos + API',
      'Automatizaciones incluidas',
      'Diseño UX/UI premium',
      'Testing + QA completo',
      'Deploy + CI/CD',
      'Soporte extendido 6 meses',
    ],
    cta: 'Conversemos',
    popular: false,
    gradient: 'from-purple-600 to-pink-600',
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-coral/5 rounded-full blur-[250px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-coral uppercase tracking-widest mb-4">
            Packs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-white">Recetas digitales</span>
            <br />
            <span className="gradient-text">para cada presupuesto.</span>
          </h2>
          <p className="text-gray-text text-base sm:text-lg">
            Sin costos ocultos, sin sorpresas. Cotización gratuita y transparente en cada proyecto.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-2xl p-[1px] h-full ${
                  plan.popular
                    ? 'bg-gradient-to-b from-coral via-amber to-coral'
                    : 'bg-white/10'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-coral to-amber text-xs font-bold text-white shadow-lg shadow-coral/30">
                      ⭐ Más Pedido
                    </div>
                  </div>
                )}

                <div className={`rounded-2xl p-6 sm:p-8 h-full flex flex-col ${
                  plan.popular ? 'bg-dark-card' : 'bg-dark-card/80 glass'
                }`}>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{plan.emoji}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{plan.name}</h3>
                    </div>
                    <p className="text-sm text-gray-text mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black gradient-text">{plan.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check size={16} className="text-coral shrink-0 mt-0.5" />
                        <span className="text-gray-light">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/56989198933?text=Hola!%20Me%20interesa%20el%20pack%20${encodeURIComponent(plan.name)}%20(${encodeURIComponent(plan.price)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'btn-primary text-white shadow-lg shadow-coral/20'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust note */}
        <AnimatedSection className="text-center mt-10 sm:mt-14" delay={0.4}>
          <p className="text-sm text-gray-text">
            💬 Consulta sin costo · 🤝 Sin compromiso · 🛡️ Garantía de satisfacción en cada proyecto
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
