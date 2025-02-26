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
import Inscritption from "./components/Inscritption";
import FicheProduit from "./components/FicheProduit";
import Panier from "./components/Panier";
import PanierAcces from "./pages/PanierAcces";
import ListeProduits from "./components/ListeProduits";
import PasserCommande from "./components/PasserCommande";
import MonCompte from "./components/Mon Compte";
import RGPD from "./pages/RGPD";
import ConditionsVentes from "./pages/ConditionsVentes";
import Plan from "./pages/plan";


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
                      <Route path={"/rgpd"} element={<RGPD/>} />
                      <Route path={"/Conditions-Ventes"} element={<ConditionsVentes/>} />
                      <Route path="/inscriptions" element={<Inscritption />} />
                      <Route path="/produit/:id" element={<FicheProduit/>} />
                      <Route path="/panier" element={<Panier/>} />
                      <Route path="/monpanier" element={<PanierAcces/>} />
                      <Route path="/produit" element={<ListeProduits />} />
                      <Route path="/passer-commande" element={<PasserCommande />} />
                      <Route path="/mon-compte" element={<MonCompte />} />
                      <Route path="/plan" element={<Plan />} />
                  </Route>
              </Routes>
          </Router>
          <ScrollToTopButton />
          </PanierProvider>
      </AuthProvider>
  );
}

export default App;