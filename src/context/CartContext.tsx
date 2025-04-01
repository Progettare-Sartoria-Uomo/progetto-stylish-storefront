
import { createContext, useContext, ReactNode, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  image: string;
  season: 'invierno' | 'verano';
  articleNumber: string;
  images: string[];
  type: string | null;
  category: 'camisa' | 'pantalon' | null;
  pantalonType: 'vestir' | 'jeans' | null;
}

interface CartItem extends Product {}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    // Find the index of the first occurrence of the product
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      // Create a new array without the removed item
      setCartItems(prevItems => [
        ...prevItems.slice(0, index),
        ...prevItems.slice(index + 1)
      ]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
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
