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
    <footer className="bg-foreground text-background py-16">
      <div className="container-site">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Ginzi"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 max-w-md leading-relaxed">
              O gengibre como você nunca viu! Cubos dourados de pura sofisticação que unem prazer e saúde de forma prática e inovadora.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links rápidos</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="https://wa.me/5527999044433" className="hover:text-primary transition-colors">
                  (27) 99904-4433
                </a>
              </li>
              <li>
                <a href="mailto:armando@apcomextrade.com" className="hover:text-primary transition-colors">
                  armando@apcomextrade.com
                </a>
              </li>
              <li>Rua Milton Caldeira, 712</li>
              <li>Itapuã</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://instagram.com/ginzibrasil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/70 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span>@ginzibrasil</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Ginzi. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm">
            AP COMEX COMÉRCIO IMPORTAÇÃO E EXPORTAÇÃO LTDA | CNPJ: 36.981.386/0001-07
          </p>
        </div>
      </div>
    </footer>
  );
}
