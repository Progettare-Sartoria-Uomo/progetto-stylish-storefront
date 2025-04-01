
import { createContext, useContext, ReactNode, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  image: string;
  season: 'invierno' | 'verano';
  articleNumber: string;
  images: string[];
}

interface CartItem extends Product {}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
