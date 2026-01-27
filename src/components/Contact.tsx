import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(27) 99904-4433',
    href: 'https://wa.me/5527999044433',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'armando@apcomextrade.com',
    href: 'mailto:armando@apcomextrade.com',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Milton Caldeira, 712 - Itapuã',
    href: null,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Segunda a Sexta: 8h às 18h',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-section-gold-light">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Fale conosco
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Entre em contato
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Estamos prontos para atender você. Entre em contato por qualquer um dos canais abaixo ou envie uma mensagem diretamente.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Siga-nos nas redes sociais</p>
              <a
                href="https://instagram.com/ginzibrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
                <span className="font-medium">@ginzibrasil</span>
              </a>
            </div>
          </div>

          {/* Contact form card */}
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <h3 className="text-2xl font-display font-bold mb-6">
              Envie uma mensagem
            </h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
