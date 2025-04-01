
import { getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const PantsPage = () => {
  const pants = getProductsByCategory('pantalon');

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Pantalones</h1>
      <ProductGrid products={pants} />
    </div>
  );
};

export default PantsPage;
