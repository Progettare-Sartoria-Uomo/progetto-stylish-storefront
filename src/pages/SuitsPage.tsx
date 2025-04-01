
import { useState } from 'react';
import { getProductsByType } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SuitsPage = () => {
  const suitProducts = getProductsByType('traje');
  const [subType, setSubType] = useState<string>('all');
  
  const filteredProducts = subType === 'all' 
    ? suitProducts 
    : suitProducts.filter(product => product.subType === subType);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Ambos</h1>
      
      <div className="mb-8">
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setSubType(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todos
          </ToggleGroupItem>
          <ToggleGroupItem value="formal" className="px-4 py-2 border-t border-b border-r">
            Formales
          </ToggleGroupItem>
          <ToggleGroupItem value="casual" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Casuales
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default SuitsPage;
