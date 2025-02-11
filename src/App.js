import './styles/App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Produit from "./pages/Produit";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="produit/:id" element={<ProductDetails/>} />
                  <Route path="src/pages/Produit.js" component={<Produit/>}/>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;