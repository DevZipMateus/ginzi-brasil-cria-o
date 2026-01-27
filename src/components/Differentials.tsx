import { Sparkles, Cloud, Eye, Leaf, Briefcase, ShieldCheck, ChefHat } from 'lucide-react';

const differentials = [
  {
    icon: Sparkles,
    title: 'Delicioso',
    subtitle: 'Um carinho no paladar',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    icon: Cloud,
    title: 'Macio',
    subtitle: 'Textura que surpreende',
    color: 'from-orange-400 to-orange-500',
  },
  {
    icon: Eye,
    title: 'Bonito',
    subtitle: 'Lindo de se ver',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    icon: Leaf,
    title: 'Medicinal',
    subtitle: 'A força da natureza',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Briefcase,
    title: 'Prático',
    subtitle: 'Com você em qualquer lugar',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    icon: ShieldCheck,
    title: 'Confiável',
    subtitle: 'Qualidade em primeiro lugar',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: ChefHat,
    title: 'Culinário',
    subtitle: 'O toque secreto das suas receitas',
    color: 'from-orange-400 to-amber-500',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-section-gold">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Por que escolher Ginzi
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            7 diferenciais de ouro
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground text-lg">
            Cada cubinho entrega uma experiência completa que cabe na palma da sua mão.
          </p>
        </div>

        {/* Differentials grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {differentials.map((diff, index) => (
            <div
              key={diff.title}
              className={`group relative bg-background rounded-2xl p-6 shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1 ${
                index === 6 ? 'md:col-start-2 lg:col-start-auto' : ''
              }`}
            >
              {/* Icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${diff.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <diff.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-display font-semibold mb-1">
                {diff.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {diff.subtitle}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-6">
            Experimente o padrão ouro em gengibre cristalizado
          </p>
          <a
            href="https://wa.me/5527999044433"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
          >
            <Sparkles size={20} />
            Quero experimentar
          </a>
        </div>
      </div>
    </section>
  );
}
