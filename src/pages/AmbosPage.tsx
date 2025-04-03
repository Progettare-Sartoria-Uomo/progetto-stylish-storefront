
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ProductGrid from '@/components/ProductGrid';
import { getProductsByType } from '@/data/products';

const AmbosPage = () => {
  const allAmbos = getProductsByType('ambo');
  const [season, setSeason] = useState<string>('all');
  
  const filteredAmbos = season === 'all' 
    ? allAmbos 
    : allAmbos.filter(product => product.season === season);

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Ambos</h1>
      
      <div className="mb-8">
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setSeason(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todos
          </ToggleGroupItem>
          <ToggleGroupItem value="invierno" className="px-4 py-2 border-t border-b border-r">
            Invierno
          </ToggleGroupItem>
          <ToggleGroupItem value="verano" className="px-4 py-2 border-t border-b border-r">
            Verano
          </ToggleGroupItem>
          <ToggleGroupItem value="primavera" className="px-4 py-2 border-t border-b border-r">
            Primavera
          </ToggleGroupItem>
          <ToggleGroupItem value="otoño" className="px-4 py-2 border-t border-b border-r">
            Otoño
          </ToggleGroupItem>
          <ToggleGroupItem value="todo-el-año" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Todo el año
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredAmbos} />
    </div>
  );
};

export default AmbosPage;
