import { useState } from 'react'
import { Header } from './Components/Header'
import { ProductList } from './Components/ProductList'
import { Footer } from './Components/footer';

function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] =useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      <Header 
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      
      
      />
      <ProductList
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      
      />
      <Footer />
    </>
  );
}

export default App
