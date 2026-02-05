import { Sparkles, Heart, Globe2, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import foundersTeamImage from '@/assets/founders-team.jpg';
import FadeInView from './animations/FadeInView';
import StaggerContainer, { StaggerItem, staggerItemVariants } from './animations/StaggerContainer';

const values = [
  {
    icon: Sparkles,
    title: 'Preciosidade',
    description: 'Tratamos cada cubo de gengibre como uma joia, cuidando da estética, da textura e do sabor para entregar o "padrão ouro" em cristalizados.',
  },
  {
    icon: Globe2,
    title: 'Respeito à origem',
    description: 'Honramos as técnicas ancestrais de Fujian e a riqueza da natureza, mantendo a integridade medicinal da raiz.',
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
        <FadeInView className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-ginger-dark font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Nossa história
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            De Jinzi para Ginzi
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-foreground/80 text-base sm:text-lg px-2">
            Uma ponte entre culturas que transforma a riqueza natural do gengibre em uma experiência sensorial surpreendente
          </p>
        </FadeInView>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <FadeInView direction="left" delay={0.2} className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Você sabia? Em chinês, a palavra <strong>Jinzi 金子</strong> significa <strong>ouro</strong>. Nós apenas trocamos o "J" pelo "G" para abraçar a nossa brasilidade, sem nunca esquecer a nossa origem.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Assim como o ouro é um metal valioso, rico e atraente, o gengibre GINZI é o nosso tesouro. Uma raiz de riqueza nutricional inestimável, lapidada por um método de cristalização ancestral que transforma cada cubo em uma joia macia, dourada e cheia de vida.
            </p>
          </FadeInView>

          <FadeInView direction="right" delay={0.3} className="relative">
            <motion.div 
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img 
                src={foundersTeamImage} 
                alt="Equipe fundadora da Ginzi em feira de negócios" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-accent/30 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
          </FadeInView>
        </div>

        {/* Mission */}
        <FadeInView delay={0.2}>
          <motion.div 
            className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 shadow-card"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4 sm:mb-6">
                Nossa missão
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                Transformar a riqueza natural do gengibre em uma experiência sensorial única, conectando culturas através de um produto premium que une prazer e saúde de forma prática e inovadora.
              </p>
            </div>
          </motion.div>
        </FadeInView>

        {/* Values */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value) => (
            <StaggerItem
              key={value.title}
              variants={staggerItemVariants}
            >
              <motion.div
                className="card-premium text-center group p-6 sm:p-8 h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 sm:w-14 h-12 sm:h-14 bg-ginger-dark/10 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-ginger-dark transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon size={24} className="text-ginger-dark group-hover:text-white sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
