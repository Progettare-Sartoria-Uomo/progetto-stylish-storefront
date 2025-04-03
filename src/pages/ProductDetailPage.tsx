
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { ArrowLeft } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif font-medium mb-4">Producto no encontrado</h1>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <Button 
        variant="ghost" 
        className="mb-8 flex items-center text-tailor-navy"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="zoom-container mb-4 rounded-lg overflow-hidden border border-gray-200 h-[500px]">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name} 
              className="zoom-image w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                className={`border overflow-hidden rounded ${
                  selectedImageIndex === index ? 'border-tailor-navy' : 'border-gray-200'
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index + 1}`} 
                  className="w-full h-24 object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-serif font-medium mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">#{product.articleNumber}</p>
          
          <Button 
            className="w-full md:w-auto bg-tailor-navy hover:bg-tailor-charcoal text-white"
            onClick={() => {
              addToCart(product); // Now works with the default quantity
              window.scrollTo(0, 0);
            }}
          >
            Sumar al pedido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
