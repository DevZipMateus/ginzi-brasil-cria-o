import { BookOpen, ArrowRight, Heart, ChefHat, Sprout, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeInView from '@/components/animations/FadeInView';
import blogBg from '@/assets/blog-bg.jpg';

const topics = [
  { icon: Heart, label: 'Bem-Estar & Longevidade' },
  { icon: ChefHat, label: 'Gastronomia' },
  { icon: Sprout, label: 'Cultura da Raiz' },
  { icon: Globe, label: 'Mundo Ginzi' },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${blogBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/75" />

      <div className="container-site px-4 sm:px-6 relative z-10">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full mb-6">
              <BookOpen size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Blog Ginzi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 text-background">
              Descubra o Mundo do Gengibre
            </h2>

            <p className="text-background/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Explore conteúdos exclusivos sobre saúde, receitas e cultura do gengibre. Confira nossos tópicos:
            </p>

            {/* Topics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 max-w-2xl mx-auto">
              {topics.map((topic, i) => (
                <motion.div
                  key={topic.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-background/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <topic.icon size={24} className="text-primary" />
                  <span className="text-sm font-medium text-background text-center leading-tight">
                    {topic.label}
                  </span>
                </motion.div>
              ))}
            </div>

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
