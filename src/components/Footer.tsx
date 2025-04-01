
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tailor-navy text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-xl mb-2">PROGETTARE</h3>
            <p className="text-sm text-gray-300">Sastrería a medida</p>
          </div>
          
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 items-center md:items-start">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">+54 11 1234-5678</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">info@progettare.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">Buenos Aires, Argentina</span>
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 items-center md:items-end">
            <Link to="/" className="text-sm hover:text-gray-300 transition-colors">Inicio</Link>
            <Link to="/invierno" className="text-sm hover:text-gray-300 transition-colors">Invierno</Link>
            <Link to="/verano" className="text-sm hover:text-gray-300 transition-colors">Verano</Link>
            <Link to="/ambos" className="text-sm hover:text-gray-300 transition-colors">Ambos</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} PROGETTARE. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
