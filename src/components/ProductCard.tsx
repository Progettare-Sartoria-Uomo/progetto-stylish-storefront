
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Product, useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden border rounded-md flex flex-col h-full bg-white">
      <Link to={`/producto/${product.id}`} className="product-image-container block h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image w-full h-full object-cover object-center"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/producto/${product.id}`} className="block mb-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">#{product.articleNumber}</p>
        </Link>
        <div className="mt-auto">
          <Button 
            className="w-full bg-tailor-navy hover:bg-tailor-charcoal text-white"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Sumar al pedido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
