import { Store, ShoppingBag, Coffee, Building2, UtensilsCrossed, Warehouse } from 'lucide-react';
import productPatternImage from '@/assets/ginzi-product-pattern.jpg';

const markets = [
  { icon: Store, name: 'Farmácias', description: 'Produtos de saúde e bem-estar' },
  { icon: ShoppingBag, name: 'Lojas de produtos naturais', description: 'Alimentos saudáveis' },
  { icon: Coffee, name: 'Empórios', description: 'Produtos gourmet' },
  { icon: Building2, name: 'Lojas de conveniência', description: 'Snacks práticos' },
  { icon: UtensilsCrossed, name: 'Padarias e restaurantes', description: 'Ingredientes especiais' },
  { icon: Warehouse, name: 'Supermercados', description: 'Alcance ao público geral' },
];

export default function Market() {
  return (
    <section id="mercado" className="py-16 sm:py-20 md:py-24 bg-section-gold">
      <div className="container-site px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-ginger-dark font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
            Onde encontrar
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
            Mercado de atuação
          </h2>
          <div className="divider-gold mb-4 sm:mb-6" />
          <p className="text-foreground/80 text-base sm:text-lg px-2">
            A Ginzi está presente nos melhores estabelecimentos, levando o padrão ouro em gengibre cristalizado para todo o Brasil.
          </p>
        </div>

        {/* Markets grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {markets.map((market) => (
            <div
              key={market.name}
              className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300 flex items-start gap-3 sm:gap-4"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ginger-dark/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-ginger-dark transition-all duration-300">
                <market.icon size={20} className="text-ginger-dark group-hover:text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-0.5 sm:mb-1">
                  {market.name}
                </h3>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  {market.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Product showcase image */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-card">
          <img 
            src={productPatternImage} 
            alt="Vários potes de gengibre cristalizado Ginzi em padrão diagonal" 
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>

        {/* B2B CTA */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-br from-primary to-accent rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4">
            Quer revender Ginzi no seu estabelecimento?
          </h3>
          <p className="text-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e saiba como levar o gengibre cristalizado premium para os seus clientes.
          </p>
          <a
            href="https://wa.me/5527999044433?text=Olá! Tenho interesse em revender os produtos Ginzi."
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300 text-sm sm:text-base"
          >
            Quero ser parceiro
          </a>
        </div>
      </div>
    </section>
  );
}
