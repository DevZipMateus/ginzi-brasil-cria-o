import { Check } from 'lucide-react';

const benefits = [
  'Gengibre cristalizado artesanal',
  'Textura macia e sabor equilibrado',
  'Embalagem prática de 100g',
  'Método tradicional de Fujian',
  'Sem conservantes artificiais',
  'Produto 100% natural',
];

export default function Product() {
  return (
    <section id="produto" className="py-24 bg-background">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-2 border-white/20 rounded-full" />
                <div className="absolute w-1/2 h-1/2 border-2 border-white/10 rounded-full" />
              </div>
              
              <div className="relative text-center p-8 z-10">
                <div className="w-32 h-32 mx-auto bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6">
                  <span className="text-6xl font-display font-bold text-foreground">G</span>
                </div>
                <p className="text-foreground text-2xl font-display font-bold">Pote 100g</p>
                <p className="text-foreground/80 mt-2">Gengibre cristalizado premium</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-foreground text-background px-6 py-3 rounded-2xl shadow-gold">
              <p className="text-sm font-medium">Premium Quality</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Nosso produto
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Gengibre cristalizado pote 100g
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nós acreditamos que cuidar de si não precisa ser uma tarefa séria ou sem graça. Pode — e deve — ser um momento de puro deleite. Por isso, a GINZI não é apenas um snack; é uma experiência completa que cabe na palma da sua mão.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://wa.me/5527999044433?text=Olá! Gostaria de saber mais sobre o gengibre cristalizado Ginzi."
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
              >
                Encomendar agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
