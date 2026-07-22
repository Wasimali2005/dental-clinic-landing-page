import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import StatsBar from '@/components/StatsBar/StatsBar';
import AboutUs from '@/components/AboutUs/AboutUs';
import Services from '@/components/Services/Services';
import About from '@/components/About/About';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Insurance from '@/components/Insurance/Insurance';
import FAQ from '@/components/FAQ/FAQ';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutUs />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <Insurance />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
