
import { getProductsByPantalonType } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

const JeansPage = () => {
  const jeans = getProductsByPantalonType('jeans');

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8 text-tailor-navy">Jeans</h1>
      <ProductGrid products={jeans} />
    </div>
  );
};

export default JeansPage;
