import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import productKitchenImage from '@/assets/ginzi-product-kitchen.jpg';
import FadeInView from './animations/FadeInView';

const benefits = [
  'Gengibre cristalizado artesanal',
  'Textura macia e sabor equilibrado',
  'Embalagem prática de 100g',
  'Método tradicional de Fujian',
  'Ação Termogênica Natural',
  'Alívio para a Garganta e Hálito Fresco',
  'Auxílio na Digestão',
  'Segurança alimentar garantida',
];

export default function Product() {
  return (
    <section id="produto" className="py-16 sm:py-20 md:py-24 bg-section-gold-light">
      <div className="container-site px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Product visual */}
          <FadeInView direction="left" className="relative order-2 lg:order-1">
            <motion.div 
              className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <motion.img 
                src={productKitchenImage} 
                alt="Pote de gengibre cristalizado Ginzi em tábua de madeira com raízes de gengibre frescas" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-gold"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <p className="text-xs sm:text-sm font-medium">Premium Quality</p>
            </motion.div>
          </FadeInView>

          {/* Content */}
          <FadeInView direction="right" delay={0.2} className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <p className="text-ginger-dark font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
                Nosso produto
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                Gengibre Cristalizado GINZI – Pote 100g
              </h2>
              <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                Acreditamos que o cuidado pessoal pode ser um momento de verdadeiro prazer. A GINZI resgata a tradição milenar de Fujian para transformar o hábito saudável em uma experiência sensorial única. Muito mais que um snack, é um aliado para o seu dia a dia que une sabor equilibrado e bem-estar em cada detalhe.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={benefit} 
                  className="flex items-center gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-ginger-dark/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, backgroundColor: 'hsl(20 50% 35%)' }}
                  >
                    <Check size={12} className="text-ginger-dark sm:w-3.5 sm:h-3.5" />
                  </motion.div>
                  <span className="text-foreground text-sm sm:text-base">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-2 sm:pt-4">
              <motion.a
                href="https://www.mercadolivre.com.br/pagina/ginzibrasil#from=share_eshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Comprar agora
              </motion.a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
