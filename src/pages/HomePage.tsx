
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProductsByType } from '@/data/products';

const HomePage = () => {
  const featuredWinterProducts = getProductsByType('all', 'winter').slice(0, 3);
  const featuredSummerProducts = getProductsByType('all', 'summer').slice(0, 3);
  const featuredSuits = getProductsByType('ambo').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Elegancia y Estilo Para Cada Ocasión</h1>
          <p className="text-xl text-gray-600 mb-8">Descubre nuestra colección de moda masculina premium</p>
          <div className="flex justify-center gap-4">
            <Link to="/winter">
              <Button>Colección Invierno</Button>
            </Link>
            <Link to="/summer">
              <Button variant="outline">Colección Verano</Button>
            </Link>
            <Link to="/suits">
              <Button variant="secondary">Ver Ambos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Winter Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Destacados de Invierno</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWinterProducts.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/winter">
              <Button>Ver Toda la Colección de Invierno</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Summer Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Destacados de Verano</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSummerProducts.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/summer">
              <Button>Ver Toda la Colección de Verano</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Suits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Ambos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredSuits.map(product => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="outline" className="w-full">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/suits">
              <Button>Ver Todos los Ambos</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
