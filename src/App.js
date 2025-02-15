import './styles/App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {PanierProvider} from "./context/PanierContext";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Produit from "./pages/Produit";
import {AuthProvider} from "./context/AuthContext";
import Login from "./pages/Login";
import Connaitre from "./pages/Connaitre";
import Contact from "./pages/Contact";
import ScrollToTopButton from './components/ScrollToTopButton';
import LegalNotice from "./pages/LegalNotice";
import Inscritption from "./pages/Inscritption";

function App() {
  return (
      <AuthProvider>
          <PanierProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="produit/:id" element={<ProductDetails/>} />
                      <Route path={"login"} element={<Login />} />
                      <Route path="/produits" element={<Produit />} />
                      <Route path="/connaitre" element={<Connaitre />} />
                      <Route path="contact" element={<Contact />} />
                      <Route path="/mentions-legales" element={<LegalNotice/>} />
                      <Route path="/inscriptions" element={<Inscritption />} />
                  </Route>
              </Routes>
          </Router>
          <ScrollToTopButton />
          </PanierProvider>
      </AuthProvider>
  );
}

export default App;