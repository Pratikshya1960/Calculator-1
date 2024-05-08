import React from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <ProductList onSelectProduct={handleProductSelect} />
      )}
    </div>
  );
};

export default App;
