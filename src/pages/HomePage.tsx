
import HeroBanner from '@/components/HeroBanner';
import ProductGrid from '@/components/ProductGrid';
import { getProductsBySeason } from '@/data/products';

const HomePage = () => {
  const winterProducts = getProductsBySeason('invierno').slice(0, 3);
  const summerProducts = getProductsBySeason('verano').slice(0, 3);

  return (
    <div className="min-h-screen">
      <HeroBanner />
      
      <section className="py-16 bg-tailor-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium mb-8 text-tailor-navy text-center">Destacados de Invierno</h2>
          <ProductGrid products={winterProducts} />
          <div className="mt-8 text-center">
            <a href="/invierno" className="inline-block border-b border-tailor-navy text-tailor-navy hover:border-tailor-charcoal hover:text-tailor-charcoal transition-colors duration-200">
              Ver toda la colección
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium mb-8 text-tailor-navy text-center">Destacados de Verano</h2>
          <ProductGrid products={summerProducts} />
          <div className="mt-8 text-center">
            <a href="/verano" className="inline-block border-b border-tailor-navy text-tailor-navy hover:border-tailor-charcoal hover:text-tailor-charcoal transition-colors duration-200">
              Ver toda la colección
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
