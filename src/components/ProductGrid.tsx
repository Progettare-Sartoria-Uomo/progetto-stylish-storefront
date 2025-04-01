
import { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/context/CartContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ProductGridProps {
  products: Product[];
  showFilter?: boolean;
}

const ProductGrid = ({ products, showFilter = false }: ProductGridProps) => {
  const [productType, setProductType] = useState<string>('all');
  
  const filteredProducts = productType === 'all' 
    ? products 
    : products.filter(product => product.type === productType);

  return (
    <div>
      {showFilter && (
        <div className="mb-8">
          <Select onValueChange={setProductType} defaultValue="all">
            <SelectTrigger className="w-full md:w-[280px]">
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los productos</SelectItem>
              <SelectItem value="saco">Sacos</SelectItem>
              <SelectItem value="abrigo">Abrigos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
