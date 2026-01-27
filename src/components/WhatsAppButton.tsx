import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5527999044433"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={28} className="text-white" fill="white" />
    </a>
  );
}
