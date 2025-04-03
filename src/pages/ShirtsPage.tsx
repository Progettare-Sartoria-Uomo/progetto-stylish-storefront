
import { useState } from 'react';
import { getProductsByCategory, getProductsByCamisaType } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const ShirtsPage = () => {
  const allShirts = getProductsByCategory('camisa');
  const [season, setSeason] = useState<string>('all');
  const [shirtType, setShirtType] = useState<string>('all');
  
  const form = useForm({
    defaultValues: {
      shirtType: "all",
    },
  });
  
  // Filter shirts by season and type
  const filteredShirts = allShirts.filter(product => {
    const matchesSeason = season === 'all' || product.season === season;
    const matchesType = shirtType === 'all' || product.camisaType === shirtType;
    return matchesSeason && matchesType;
  });

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Camisas</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Temporada</h2>
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

      <div className="mb-8">
        <h2 className="text-lg font-medium mb-2">Tipo de Camisa</h2>
        <ToggleGroup type="single" defaultValue="all" onValueChange={(value) => value && setShirtType(value)}>
          <ToggleGroupItem value="all" className="px-4 py-2 border rounded-l-md">
            Todas
          </ToggleGroupItem>
          <ToggleGroupItem value="lisa" className="px-4 py-2 border-t border-b border-r">
            Lisa
          </ToggleGroupItem>
          <ToggleGroupItem value="fantasia" className="px-4 py-2 border-t border-b border-r">
            Fantasía
          </ToggleGroupItem>
          <ToggleGroupItem value="estampada" className="px-4 py-2 border-t border-b border-r">
            Estampada
          </ToggleGroupItem>
          <ToggleGroupItem value="manga-corta" className="px-4 py-2 border-t border-b border-r rounded-r-md">
            Manga Corta
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ProductGrid products={filteredShirts} />
    </div>
  );
};

export default ShirtsPage;
