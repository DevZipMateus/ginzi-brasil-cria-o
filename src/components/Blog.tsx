import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInView from '@/components/animations/FadeInView';

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-muted/30">
      <div className="container-site px-4 sm:px-6">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <BookOpen size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Blog Ginzi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4">
              Descubra o Mundo do Gengibre
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Receitas exclusivas, dicas de saúde, curiosidades e tudo sobre o universo do gengibre cristalizado. Acompanhe nosso blog e transforme seu dia a dia!
            </p>

            <motion.a
              href="https://ginzi-blog.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <BookOpen size={22} />
              Acessar o Blog
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
