import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Differentials from '@/components/Differentials';
import Product from '@/components/Product';
import Market from '@/components/Market';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Product />
        <Market />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
