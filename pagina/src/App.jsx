import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { ProductList } from './Components/ProductList';
import { Footer } from './Components/footer';
import Register from './Components/register';
import Login from './Components/Login'; 

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.find((item) => item.id === product.id)) {
        return [...prevFavorites, product];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        favorites={favorites}
        removeFromFavorites={removeFromFavorites} // Pasar la función a Header
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <ProductList
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              addToFavorites={addToFavorites} // Pasar la función a ProductList
            />
          } 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> {/* Agregar la ruta para el componente Login */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
