
// Define product types
export type ProductType = 'saco' | 'abrigo' | 'ambo';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: ProductType;
  season?: 'winter' | 'summer';
}

// Sample product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Saco Elegante',
    price: 199.99,
    description: 'Un saco elegante para ocasiones formales',
    imageUrl: '/placeholder.svg',
    type: 'saco',
    season: 'winter'
  },
  {
    id: '2',
    name: 'Abrigo de Invierno',
    price: 299.99,
    description: 'Abrigo cálido para el invierno',
    imageUrl: '/placeholder.svg',
    type: 'abrigo',
    season: 'winter'
  },
  {
    id: '3',
    name: 'Saco Ligero',
    price: 149.99,
    description: 'Saco ligero ideal para el verano',
    imageUrl: '/placeholder.svg',
    type: 'saco',
    season: 'summer'
  },
  {
    id: '4',
    name: 'Ambo Clásico',
    price: 349.99,
    description: 'Ambo clásico para ocasiones formales',
    imageUrl: '/placeholder.svg',
    type: 'ambo',
  },
  {
    id: '5',
    name: 'Ambo Moderno',
    price: 399.99,
    description: 'Ambo moderno con corte contemporáneo',
    imageUrl: '/placeholder.svg',
    type: 'ambo',
  }
];

// Function to get all products
export const getAllProducts = (): Product[] => {
  return products;
};

// Function to get products by season
export const getProductsBySeason = (season: 'winter' | 'summer'): Product[] => {
  return products.filter(product => product.season === season);
};

// Function to get products by type
export const getProductsByType = (type: ProductType | 'all', season?: 'winter' | 'summer'): Product[] => {
  if (season) {
    // Filter by both type and season
    if (type === 'all') {
      return products.filter(product => product.season === season);
    }
    return products.filter(product => product.type === type && product.season === season);
  } else {
    // Filter only by type
    if (type === 'all') {
      return products;
    }
    return products.filter(product => product.type === type);
  }
};

// Function to get a specific product by id
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
