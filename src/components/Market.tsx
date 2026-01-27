import { Store, ShoppingBag, Coffee, Building2, UtensilsCrossed, Warehouse } from 'lucide-react';

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
    <section id="mercado" className="py-24 bg-card">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Onde encontrar
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Mercado de atuação
          </h2>
          <div className="divider-gold mb-6" />
          <p className="text-muted-foreground text-lg">
            A Ginzi está presente nos melhores estabelecimentos, levando o padrão ouro em gengibre cristalizado para todo o Brasil.
          </p>
        </div>

        {/* Markets grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <div
              key={market.name}
              className="group bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <market.icon size={24} className="text-primary group-hover:text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {market.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {market.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* B2B CTA */}
        <div className="mt-16 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Quer revender Ginzi no seu estabelecimento?
          </h3>
          <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e saiba como levar o gengibre cristalizado premium para os seus clientes.
          </p>
          <a
            href="https://wa.me/5527999044433?text=Olá! Tenho interesse em revender os produtos Ginzi."
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:bg-foreground/90 transition-all duration-300"
          >
            Quero ser parceiro
          </a>
        </div>
      </div>
    </section>
  );
}
