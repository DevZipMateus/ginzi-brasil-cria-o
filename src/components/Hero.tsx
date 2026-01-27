import { ArrowRight } from 'lucide-react';
import productImage from '@/assets/ginzi-product-top.jpg';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(48 95% 53%) 0%, hsl(45 90% 55%) 50%, hsl(40 80% 50%) 100%)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-site relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">
                Gengibre cristalizado premium
              </span>
            </div>

            {/* H1 - Nome da empresa (sr-only para SEO) */}
            <h1 className="sr-only">Ginzi - Gengibre Cristalizado Premium</h1>
            
            {/* Logo visual */}
            <img 
              src="/ginzi-logo.png" 
              alt="Ginzi" 
              className="h-24 md:h-32 lg:h-40 mx-auto lg:mx-0 mb-6 animate-slide-up"
            />

            {/* H2 - Descrição */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              O gengibre como você nunca viu!
            </h2>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Cubos dourados de pura sofisticação. Uma experiência sensorial de luxo e bem-estar que une prazer e saúde de forma prática e inovadora.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://wa.me/5527999044433"
                className="btn-hero"
              >
                Quero conhecer
                <ArrowRight size={20} />
              </a>
              <a
                href="#sobre"
                className="btn-hero-outline"
              >
                Nossa história
              </a>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-fade-in hidden lg:block" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src={productImage} 
                alt="Pote de gengibre cristalizado Ginzi com raízes de gengibre" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl animate-float"
              />
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-display font-bold text-foreground">7</p>
            <p className="text-sm md:text-base text-foreground/70 mt-1">Diferenciais de ouro</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-display font-bold text-foreground">100%</p>
            <p className="text-sm md:text-base text-foreground/70 mt-1">Natural</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-display font-bold text-foreground">✦</p>
            <p className="text-sm md:text-base text-foreground/70 mt-1">Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
}
