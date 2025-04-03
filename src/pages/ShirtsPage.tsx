
import { useState } from 'react';
import { getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ShirtsPage = () => {
  const allShirts = getProductsByCategory('camisa');
  const [season, setSeason] = useState<string>('all');
  
  const filteredShirts = season === 'all' 
    ? allShirts 
    : allShirts.filter(product => product.season === season);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Camisas</h1>
      
      <div className="mb-8">
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setSeason(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todas
          </ToggleGroupItem>
          <ToggleGroupItem value="invierno" className="px-4 py-2 border-t border-b border-r">
            Invierno
          </ToggleGroupItem>
          <ToggleGroupItem value="verano" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Verano
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredShirts} />
    </div>
  );
};

export default ShirtsPage;
