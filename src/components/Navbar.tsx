
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();
  
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Invierno', path: '/invierno' },
    { name: 'Verano', path: '/verano' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-tailor-navy text-2xl md:text-3xl font-serif font-semibold tracking-wide">PROGETTARE</h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-tailor-navy ${
                  isActive(link.path) ? 'text-tailor-navy border-b-2 border-tailor-navy' : 'text-tailor-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-tailor-navy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <div className="flex flex-col h-full">
                  <div className="py-4 border-b">
                    <h2 className="text-lg font-serif font-medium">Carrito</h2>
                  </div>
                  <div className="flex-1 py-4 overflow-auto">
                    {cartItems.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">No hay productos en el carrito</p>
                    ) : (
                      <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                          <li key={index} className="flex justify-between items-center pb-2 border-b">
                            <span>{item.name} - #{item.articleNumber}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="py-4 border-t mt-auto">
                    <Button 
                      className="w-full bg-tailor-navy hover:bg-tailor-charcoal text-white" 
                      onClick={() => {
                        if (cartItems.length > 0) {
                          const message = encodeURIComponent(
                            `Hola, me gustaría ordenar los siguientes productos:\n\n${cartItems
                              .map((item) => `- ${item.name} #${item.articleNumber}`)
                              .join('\n')}`
                          );
                          window.open(`https://wa.me/?text=${message}`, '_blank');
                        }
                      }}
                      disabled={cartItems.length === 0}
                    >
                      Enviar Pedido
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative mr-2">
                  <ShoppingCart className="h-5 w-5" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-tailor-navy text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col h-full">
                  <div className="py-4 border-b">
                    <h2 className="text-lg font-serif font-medium">Carrito</h2>
                  </div>
                  <div className="flex-1 py-4 overflow-auto">
                    {cartItems.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">No hay productos en el carrito</p>
                    ) : (
                      <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                          <li key={index} className="flex justify-between items-center pb-2 border-b">
                            <span>{item.name} - #{item.articleNumber}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="py-4 border-t mt-auto">
                    <Button 
                      className="w-full bg-tailor-navy hover:bg-tailor-charcoal text-white" 
                      onClick={() => {
                        if (cartItems.length > 0) {
                          const message = encodeURIComponent(
                            `Hola, me gustaría ordenar los siguientes productos:\n\n${cartItems
                              .map((item) => `- ${item.name} #${item.articleNumber}`)
                              .join('\n')}`
                          );
                          window.open(`https://wa.me/?text=${message}`, '_blank');
                        }
                      }}
                      disabled={cartItems.length === 0}
                    >
                      Enviar Pedido
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-tailor-navy bg-gray-100' : 'text-tailor-charcoal'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
