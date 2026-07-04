import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿La consulta inicial tiene algún costo?',
    a: 'No, cero. Nos cuentas tu idea por WhatsApp, te orientamos y te entregamos una cotización 100% gratis y sin compromiso. Si te tinca, seguimos. Si no, sin drama. 💬',
  },
  {
    q: '¿Qué tipo de proyectos hacen?',
    a: 'Preparamos de todo: landing pages, sitios web, tiendas online, apps, automatizaciones, bots y sistemas a medida. Si se puede programar, lo cocinamos. Desde un roll simple hasta un omakase completo. 🍣',
  },
  {
    q: '¿Cuánto se demora un proyecto?',
    a: 'Depende del plato que pidas. Una landing puede estar lista en 5-7 días. Un sitio web completo en 2-3 semanas. Proyectos más grandes los planificamos juntos con timeline claro. Siempre cumplimos con los tiempos. ⏰',
  },
  {
    q: '¿Qué tecnologías usan?',
    a: 'Nuestros ingredientes favoritos son React, TypeScript, Node.js, Python, Tailwind CSS, y más. Elegimos el stack que mejor se adapte a tu proyecto, siempre pensando en rendimiento y escalabilidad. ⚛️',
  },
  {
    q: '¿Puedo pedir cambios después de la entrega?',
    a: 'Claro que sí. Todos nuestros packs incluyen rondas de revisión. Y después de la entrega final, tienes soporte incluido por el período de tu plan para cualquier ajuste que necesites. ✨',
  },
  {
    q: '¿Trabajan solo con empresas o también con personas?',
    a: 'Con todos. Emprendedores, freelancers, pymes, profesionales independientes, artistas... Si tienes una idea y necesitas llevarla al mundo digital, estamos pa\' ayudarte. 🚀',
  },
  {
    q: '¿Solo atienden en Iquique?',
    a: 'Operamos desde Iquique, Tarapacá, pero trabajamos con clientes de todo Chile y Latinoamérica. Todo se coordina por WhatsApp, videollamada y herramientas online. La distancia no es ingrediente en nuestra receta. 🌎',
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`rounded-xl border transition-all duration-300 ${
        isOpen ? 'border-coral/20 glass-strong' : 'border-white/5 glass'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-white pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className={`transition-colors ${isOpen ? 'text-coral' : 'text-gray-text'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-text leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-amber uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-white">Preguntas que</span>{' '}
            <span className="gradient-text">siempre nos hacen.</span>
          </h2>
          <p className="text-gray-text text-base sm:text-lg">
            Si tu pregunta no está aquí, mándanos un mensaje al WhatsApp. Respondemos al tiro.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
