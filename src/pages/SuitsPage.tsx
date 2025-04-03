
import React, { useState } from 'react';
import { getProductsByType, Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SuitsPage = () => {
  const [products] = useState<Product[]>(getProductsByType('ambo'));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nuestros Ambos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <Link to={`/product/${product.id}`}>
                <Button variant="outline" className="w-full">Ver Detalles</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No se encontraron productos.</p>
        </div>
      )}
    </div>
  );
};

export default SuitsPage;
