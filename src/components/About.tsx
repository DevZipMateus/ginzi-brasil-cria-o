import { Sparkles, Heart, Globe2, Leaf } from 'lucide-react';
import productTopImage from '@/assets/ginzi-product-top.jpg';

const values = [
  {
    icon: Sparkles,
    title: 'Preciosidade',
    description: 'Tratamos cada cubo de gengibre como uma joia, cuidando da estética, da textura e do sabor para entregar o "padrão ouro" em cristalizados.',
  },
  {
    icon: Globe2,
    title: 'Respeito à origem',
    description: 'Honramos as técnicas ancestrais de Fujian e a sabedoria da natureza, mantendo a integridade medicinal da raiz.',
  },
  {
    icon: Heart,
    title: 'Inovação com alma',
    description: 'Somos movidos pela criatividade capixaba de transformar o tradicional em algo extraordinário e surpreendente.',
  },
  {
    icon: Leaf,
    title: 'Vitalidade',
    description: 'Acreditamos que o bem-estar deve ser vibrante e saboroso, promovendo uma vida com mais energia e equilíbrio.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 bg-section-gold-light">
      <div className="container-site px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-ginger-dark font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Nossa história
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            De Jinzi para Ginzi
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-foreground/80 text-base sm:text-lg px-2">
            Uma ponte entre culturas que transforma a riqueza natural do gengibre em uma experiência sensorial de luxo.
          </p>
        </div>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Tudo começou em 2023, entre o burburinho e os sorrisos de um encontro entre amigos e clientes na feira Anufood, em São Paulo. Ali, nasceu um desejo inquieto no coração de um empresário capixaba: <strong>e se o gengibre pudesse ser elevado a um novo patamar de sofisticação e prazer?</strong>
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Foram 12 meses de pesquisas e muito dedicação até chegarmos à essência da nossa marca. Fomos buscar inspiração na província chinesa de <strong>Fujian</strong>, berço de uma tradição milenar.
            </p>
            <div className="p-4 sm:p-6 bg-primary/10 rounded-2xl border-l-4 border-primary">
              <p className="text-foreground italic text-sm sm:text-base">
                "Em chinês, a palavra <strong>Jinzi</strong> significa ouro. Nós apenas trocamos o 'J' pelo 'G' para abraçar a nossa brasilidade, sem nunca esquecer a nossa origem."
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-card">
              <img 
                src={productTopImage} 
                alt="Pote de gengibre cristalizado Ginzi com raízes de gengibre" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-accent/30 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Mission */}
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-card">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6">
              Nossa missão
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
              Transformar a riqueza natural do gengibre em uma experiência sensorial de luxo e bem-estar, conectando culturas através de um produto premium que une prazer e saúde de forma prática e inovadora.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-premium text-center group p-6 sm:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-ginger-dark/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-ginger-dark transition-all duration-300">
                <value.icon size={24} className="text-ginger-dark group-hover:text-white sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
