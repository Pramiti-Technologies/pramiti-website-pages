import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Careers } from './components/Careers';
import { Team } from './components/Team';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { KolamDecoration } from './components/KolamDecoration';

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Decorative Kolam Patterns on sides */}
      <KolamDecoration />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <Careers />
          <Team />
          <Vision />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
