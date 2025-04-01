
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-6xl font-serif font-bold mb-4 text-tailor-navy">404</h1>
        <p className="text-xl text-gray-600 mb-6">Página no encontrada</p>
        <Button 
          className="bg-tailor-navy hover:bg-tailor-charcoal text-white" 
          onClick={() => navigate('/')}
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
