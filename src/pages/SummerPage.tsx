
import { useState } from 'react';
import { getProductsBySeason } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SummerPage = () => {
  const summerProducts = getProductsBySeason('verano');
  const [productType, setProductType] = useState<string>('all');
  
  const filteredProducts = productType === 'all' 
    ? summerProducts 
    : summerProducts.filter(product => product.type === productType);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Colección Verano</h1>
      
      <div className="mb-8">
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setProductType(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todos
          </ToggleGroupItem>
          <ToggleGroupItem value="saco" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Sacos
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default SummerPage;
