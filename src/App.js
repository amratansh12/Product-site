import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProductModal from './components/ProductModal/ProductModal';
import Products from './components/Products/Products';

function App() {
  const [product, setProduct] = useState({});

  return (
    <div className="App">
      <Navbar />
      <Products setProduct={setProduct} />

      <ProductModal product={product}/>
    </div>
  );
}

export default App;
