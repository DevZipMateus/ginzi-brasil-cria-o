import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBackground from '@/assets/hero-background.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with subtle zoom animation */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="container-site relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-hero-text/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="w-2 h-2 bg-hero-text rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm font-medium text-hero-text">
              Gengibre cristalizado premium
            </span>
          </motion.div>

          {/* H1 - Nome da empresa (sr-only para SEO) */}
          <h1 className="sr-only">Ginzi - Gengibre Cristalizado Premium</h1>
          
          {/* Logo visual */}
          <motion.img 
            src="/ginzi-logo.png" 
            alt="Ginzi" 
            className="h-16 sm:h-24 md:h-32 lg:h-40 mx-auto mb-4 sm:mb-6 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
          />

          {/* H2 - Descrição */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 drop-shadow-md text-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            O gengibre como você nunca viu!
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg md:text-xl text-hero-text/90 max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow-sm px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Cubos dourados de pura sofisticação. Uma experiência sensorial única que une prazer e saúde de forma prática e inovadora.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://wa.me/5527999044433"
              className="btn-hero-green w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Quero conhecer
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#sobre"
              className="btn-hero-outline-green w-full sm:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Nossa história
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-16 border-t border-hero-text/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { value: '7', label: 'Diferenciais de ouro' },
              { value: '100%', label: 'Natural' },
              { value: '✦', label: 'Premium' },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              >
                <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-hero-text drop-shadow-md">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-hero-text/80 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
