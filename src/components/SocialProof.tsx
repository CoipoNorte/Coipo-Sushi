import AnimatedSection from './AnimatedSection';

const brands = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 sm:py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-gray-text uppercase tracking-widest">
            Los ingredientes frescos con los que cocinamos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-2 group cursor-default">
                <span className="text-3xl sm:text-4xl grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  {brand.icon}
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-text/50 group-hover:text-gray-text transition-colors duration-500">
                  {brand.name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust numbers */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100%', label: 'Consultas sin costo', emoji: '💬' },
              { number: 'A medida', label: 'Cada proyecto es único', emoji: '🎯' },
              { number: 'Full Stack', label: 'Front, back y deploy', emoji: '🧑‍🍳' },
              { number: 'Iquique', label: 'Sabor local, alcance global', emoji: '🌎' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-4 sm:p-6 rounded-2xl glass card-hover"
              >
                <span className="text-2xl mb-2 block">{item.emoji}</span>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{item.number}</div>
                <div className="text-xs sm:text-sm text-gray-text">{item.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
