
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Product = {
  id: number;
  name: string;
  season: 'invierno' | 'verano' | 'primavera' | 'otoño' | 'todo-el-año' | 'multi-estacion' | 'coleccion-especial';
  articleNumber: string;
  image: string;
  images: string[];
  type: string | null;
  category: 'camisa' | 'pantalon' | 'ambo' | null;
  pantalonType: 'vestir' | 'jeans' | null;
  camisaType: 'lisa' | 'fantasia' | 'estampada' | 'manga-corta' | null;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  cartItems: Product[]; // Added this property
  addToCart: (product: Product, quantity?: number) => void; // Made quantity optional
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Derive cartItems from cart for components that only need product info
  const cartItems = cart.map(item => item.product);

  const addToCart = (product: Product, quantity: number = 1) => { // Default quantity to 1
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    // In a real app, you would calculate this based on product prices
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      cartItems,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      getCartTotal,
      getCartCount 
    }}>
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
