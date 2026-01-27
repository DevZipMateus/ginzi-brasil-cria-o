import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInView from './animations/FadeInView';

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
    <section id="contato" className="py-16 sm:py-20 md:py-24 bg-section-gold-light">
      <div className="container-site px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact info */}
          <FadeInView direction="left">
            <p className="text-ginger-dark font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">
              Fale conosco
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Entre em contato
            </h2>
            <p className="text-foreground/80 text-base sm:text-lg mb-6 sm:mb-8">
              Estamos prontos para atender você. Entre em contato por qualquer um dos canais abaixo ou envie uma mensagem diretamente.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label} 
                  className="flex items-start gap-3 sm:gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-10 sm:w-12 h-10 sm:h-12 bg-foreground/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'hsl(20 50% 35%)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <info.icon size={18} className="text-ginger-dark sm:w-[22px] sm:h-[22px]" />
                  </motion.div>
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/70">{info.label}</p>
                    {info.href ? (
                      <motion.a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors text-sm sm:text-base"
                        whileHover={{ x: 3 }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p className="text-foreground font-medium text-sm sm:text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div 
              className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-foreground/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4">Siga-nos nas redes sociais</p>
              <motion.a
                href="https://instagram.com/ginzibrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <Instagram size={20} className="sm:w-6 sm:h-6" />
                <span className="font-medium text-sm sm:text-base">@ginzibrasil</span>
              </motion.a>
            </motion.div>
          </FadeInView>

          {/* Contact form card */}
          <FadeInView direction="right" delay={0.2}>
            <motion.div 
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">
                Envie uma mensagem
              </h3>
              <form className="space-y-4 sm:space-y-5">
                {[
                  { id: 'name', label: 'Nome completo', type: 'text', placeholder: 'Seu nome' },
                  { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
                  { id: 'phone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
                ].map((field, index) => (
                  <motion.div 
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <label htmlFor={field.id} className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm sm:text-base"
                      placeholder={field.placeholder}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    Mensagem
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-sm sm:text-base"
                    placeholder="Como podemos ajudar?"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-semibold rounded-lg sm:rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Enviar mensagem
                </motion.button>
              </form>
            </motion.div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
