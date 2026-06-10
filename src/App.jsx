import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Progress from './components/Progress';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Progress />
        <Services />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
