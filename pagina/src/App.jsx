import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { ProductList } from './Components/ProductList';
import { Footer } from './Components/footer';
import Register from './Components/register';
import Login from './Components/Login'; 

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <Router>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <Routes>
        <Route path="/" element={
          <ProductList
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
          />
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> {/* Agregar la ruta para el componente Login */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
