
import { getProductsByPantalonType } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const DressPantsPage = () => {
  const dressPants = getProductsByPantalonType('vestir');

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Pantalones de Vestir</h1>
      <ProductGrid products={dressPants} />
    </div>
  );
};

export default DressPantsPage;
