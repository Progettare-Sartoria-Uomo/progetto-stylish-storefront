
import { Product } from '@/context/CartContext';

// Helper function to create product data
const createProduct = (
  id: number, 
  name: string, 
  season: 'invierno' | 'verano' | 'primavera' | 'otoño' | 'todo-el-año' | 'multi-estacion' | 'coleccion-especial', 
  articleNumber: string, 
  imagePath: string,
  detailImages: string[],
  type?: string,
  category?: 'camisa' | 'pantalon' | 'ambo' | null,
  pantalonType?: 'vestir' | 'jeans' | null,
  camisaType?: 'lisa' | 'fantasia' | 'estampada' | 'manga-corta' | null
): Product => ({
  id,
  name,
  season,
  articleNumber,
  image: imagePath,
  images: detailImages,
  type: type || null,
  category: category || null,
  pantalonType: pantalonType || null,
  camisaType: camisaType || null
});

// Products data
export const products: Product[] = [
  // Invierno products
  createProduct(
    1, 
    'Abrigo de Lana', 
    'invierno', 
    '1001', 
    'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1976&auto=format&fit=crop'
    ],
    'abrigo'
  ),
  createProduct(
    2, 
    'Blazer Elegante', 
    'invierno', 
    '1002', 
    'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598971636708-c91eee54d851?q=80&w=1976&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=1976&auto=format&fit=crop'
    ],
    'saco'
  ),
  createProduct(
    3, 
    'Traje Formal', 
    'invierno', 
    '1003', 
    'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2125&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2125&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2080&auto=format&fit=crop'
    ],
    'saco'
  ),
  createProduct(
    4, 
    'Camisa Formal', 
    'invierno', 
    '1004', 
    'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1563630423918-b58f07336ac9?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'lisa'
  ),
  createProduct(
    5, 
    'Suéter de Cashmere', 
    'invierno', 
    '1005', 
    'https://images.unsplash.com/photo-1611911813383-67769eb37f1d?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1611911813383-67769eb37f1d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588189408846-30ad4f3d5c7d?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611912615489-6b7a348b96e1?q=80&w=2080&auto=format&fit=crop'
    ],
    'abrigo'
  ),
  createProduct(
    6, 
    'Pantalón de Lana', 
    'invierno', 
    '1006', 
    'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'vestir'
  ),
  
  // Verano products
  createProduct(
    7, 
    'Camisa de Lino', 
    'verano', 
    '2001', 
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1770&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1770&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'fantasia'
  ),
  createProduct(
    8, 
    'Traje Ligero', 
    'verano', 
    '2002', 
    'https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592878840310-fffe347a6175?q=80&w=2080&auto=format&fit=crop'
    ],
    'saco'
  ),
  createProduct(
    9, 
    'Blazer de Algodón', 
    'verano', 
    '2003', 
    'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582274528667-1e8d1506e2b1?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584273143981-41aa38b10a27?q=80&w=1974&auto=format&fit=crop'
    ],
    'saco'
  ),
  createProduct(
    10, 
    'Pantalón Chino', 
    'verano', 
    '2004', 
    'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1970&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'vestir'
  ),
  createProduct(
    11, 
    'Camisa Polo', 
    'verano', 
    '2005', 
    'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1964&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?q=80&w=1964&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585518126460-91c898e2e2d9?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895572-25e29aced2c6?q=80&w=2080&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'manga-corta'
  ),
  createProduct(
    12, 
    'Zapatos de Cuero', 
    'verano', 
    '2006', 
    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614252234419-9d7f0c3c5843?q=80&w=2080&auto=format&fit=crop'
    ]
  ),
  
  // Additional Shirts (Camisas)
  createProduct(
    13, 
    'Camisa Oxford', 
    'verano', 
    '3001', 
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1976&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'lisa'
  ),
  createProduct(
    14, 
    'Camisa de Rayas', 
    'verano', 
    '3002', 
    'https://images.unsplash.com/photo-1594938298601-9dcb1d2bb1e7?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1594938298601-9dcb1d2bb1e7?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'estampada'
  ),
  createProduct(
    15, 
    'Camisa Elegante', 
    'invierno', 
    '3003', 
    'https://images.unsplash.com/photo-1624456735729-03594a40c5fb?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1624456735729-03594a40c5fb?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613852348853-d04dd6cf04f4?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'camisa',
    null,
    'fantasia'
  ),
  
  // Additional Pants (Pantalones)
  createProduct(
    16, 
    'Pantalón de Vestir Gris', 
    'invierno', 
    '4001', 
    'https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1970&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'vestir'
  ),
  createProduct(
    17, 
    'Jeans Azul Clásico', 
    'verano', 
    '4002', 
    'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598522325074-042db73aa4e6?q=80&w=1974&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    18, 
    'Jeans Oscuros', 
    'invierno', 
    '4003', 
    'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1604176424472-64fb04ee2eed?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'jeans'
  ),
  createProduct(
    19, 
    'Pantalón de Vestir Negro', 
    'invierno', 
    '4004', 
    'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938328870-9623159c8c99?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938244682-0c9310e0f760?q=80&w=2080&auto=format&fit=crop'
    ],
    null,
    'pantalon',
    'vestir'
  ),
  
  // Ambos products
  createProduct(
    20, 
    'Ambo Ejecutivo Negro', 
    'todo-el-año', 
    '5001', 
    'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?q=80&w=2070&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1553240799-36bbf332a5c3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    21, 
    'Ambo Clásico Gris', 
    'invierno', 
    '5002', 
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1974&auto=format&fit=crop'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    22, 
    'Ambo Azul Marino', 
    'verano', 
    '5003', 
    'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2080&auto=format&fit=crop'
    ],
    'ambo',
    'ambo'
  ),
  createProduct(
    23, 
    'Ambo Premium Beige', 
    'primavera', 
    '5004', 
    'https://images.unsplash.com/photo-1594938298601-9dcb1d2bb1e7?q=80&w=2080&auto=format&fit=crop',
    [
      'https://images.unsplash.com/photo-1594938298601-9dcb1d2bb1e7?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=2080&auto=format&fit=crop'
    ],
    'ambo',
    'ambo'
  ),
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsBySeason = (season: 'invierno' | 'verano' | 'primavera' | 'otoño' | 'todo-el-año' | 'multi-estacion' | 'coleccion-especial'): Product[] => {
  return products.filter(product => product.season === season);
};

export const getProductsByCategory = (category: 'camisa' | 'pantalon' | 'ambo'): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByPantalonType = (type: 'vestir' | 'jeans'): Product[] => {
  return products.filter(product => product.category === 'pantalon' && product.pantalonType === type);
};

export const getProductsByCamisaType = (type: 'lisa' | 'fantasia' | 'estampada' | 'manga-corta'): Product[] => {
  return products.filter(product => product.category === 'camisa' && product.camisaType === type);
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(product => product.type === type);
};
