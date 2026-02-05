import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/logo.png';

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#produto', label: 'Produto' },
  { href: '#mercado', label: 'Mercado' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 overflow-hidden">
      <div className="container-site px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={logo}
              alt="Ginzi"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 brightness-0 invert"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-background/70 max-w-md leading-relaxed text-sm sm:text-base">
              O gengibre como você nunca viu! Cubos dourados de pura sofisticação que unem prazer e saúde de forma prática e inovadora.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-background/70 text-sm sm:text-base">
              <li>
                <motion.a 
                  href="https://wa.me/5527999044433" 
                  className="hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  (27) 99904-4433
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="mailto:contato@ginzi.com.br" 
                  className="hover:text-primary transition-colors break-all"
                  whileHover={{ x: 3 }}
                >
                  contato@ginzi.com.br
                </motion.a>
              </li>
            </ul>
            <motion.div 
              className="mt-4 sm:mt-6"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://instagram.com/ginzibrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">@ginzibrasil</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-6 sm:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-background/50 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Ginzi. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-xs sm:text-sm text-center md:text-right">
            AP COMEX COMÉRCIO IMPORTAÇÃO E EXPORTAÇÃO LTDA | CNPJ: 36.981.386/0001-07
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
