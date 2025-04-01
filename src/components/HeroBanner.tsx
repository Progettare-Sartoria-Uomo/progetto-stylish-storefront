
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HeroBanner = () => {
  return (
    <div className="relative h-[70vh] bg-tailor-dark overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1974&auto=format&fit=crop")'}}
      />
      <div className="container mx-auto h-full flex items-center relative z-10 px-4">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-4">PROGETTARE</h1>
          <p className="text-lg md:text-xl mb-6 text-tailor-cream">Excelencia en sastrería italiana</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-tailor-beige text-tailor-navy hover:bg-tailor-cream">
              <Link to="/invierno">Colección Invierno</Link>
            </Button>
            <Button asChild variant="outline" className="border-tailor-beige text-tailor-beige hover:bg-tailor-beige/10">
              <Link to="/verano">Colección Verano</Link>
            </Button>
            <Button asChild className="bg-tailor-cream text-tailor-navy hover:bg-tailor-beige">
              <Link to="/ambos">Explorar Ambos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
