import { Instagram } from 'lucide-react';
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
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container-site px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src={logo}
              alt="Ginzi"
              className="h-10 sm:h-12 w-auto mb-3 sm:mb-4 brightness-0 invert"
            />
            <p className="text-background/70 max-w-md leading-relaxed text-sm sm:text-base">
              O gengibre como você nunca viu! Cubos dourados de pura sofisticação que unem prazer e saúde de forma prática e inovadora.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Links rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-background/70 text-sm sm:text-base">
              <li>
                <a href="https://wa.me/5527999044433" className="hover:text-primary transition-colors">
                  (27) 99904-4433
                </a>
              </li>
              <li>
                <a href="mailto:armando@apcomextrade.com" className="hover:text-primary transition-colors break-all">
                  armando@apcomextrade.com
                </a>
              </li>
              <li>Rua Milton Caldeira, 712</li>
              <li>Itapuã</li>
            </ul>
            <div className="mt-4 sm:mt-6">
              <a
                href="https://instagram.com/ginzibrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">@ginzibrasil</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-background/50 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Ginzi. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-xs sm:text-sm text-center md:text-right">
            AP COMEX COMÉRCIO IMPORTAÇÃO E EXPORTAÇÃO LTDA | CNPJ: 36.981.386/0001-07
          </p>
        </div>
      </div>
    </footer>
  );
}
