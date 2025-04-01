
import { useState } from 'react';
import { getProductsBySeason } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const WinterPage = () => {
  const winterProducts = getProductsBySeason('invierno');
  const [productType, setProductType] = useState<string>('all');
  
  const filteredProducts = productType === 'all' 
    ? winterProducts 
    : winterProducts.filter(product => product.type === productType);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Colección Invierno</h1>
      
      <div className="mb-8">
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setProductType(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todos
          </ToggleGroupItem>
          <ToggleGroupItem value="saco" className="px-4 py-2 border-t border-b border-r">
            Sacos
          </ToggleGroupItem>
          <ToggleGroupItem value="abrigo" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Abrigos
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default WinterPage;
