import { ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="container-site relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-foreground/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Gengibre cristalizado premium
            </span>
          </div>

          {/* H1 - Nome da empresa (sr-only para SEO) */}
          <h1 className="sr-only">Ginzi - Gengibre Cristalizado Premium</h1>
          
          {/* Logo visual */}
          <img 
            src="/ginzi-logo.png" 
            alt="Ginzi" 
            className="h-16 sm:h-24 md:h-32 lg:h-40 mx-auto mb-4 sm:mb-6 animate-slide-up drop-shadow-lg"
          />

          {/* H2 - Descrição */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
            O gengibre como você nunca viu!
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-10 animate-slide-up drop-shadow-sm px-2" style={{ animationDelay: '0.2s' }}>
            Cubos dourados de pura sofisticação. Uma experiência sensorial de luxo e bem-estar que une prazer e saúde de forma prática e inovadora.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/5527999044433"
              className="btn-hero w-full sm:w-auto text-center"
            >
              Quero conhecer
              <ArrowRight size={20} />
            </a>
            <a
              href="#sobre"
              className="btn-hero-outline w-full sm:w-auto text-center"
            >
              Nossa história
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-16 border-t border-foreground/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground drop-shadow-md">7</p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 mt-1">Diferenciais de ouro</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground drop-shadow-md">100%</p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 mt-1">Natural</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-foreground drop-shadow-md">✦</p>
              <p className="text-xs sm:text-sm md:text-base text-foreground/80 mt-1">Premium</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
