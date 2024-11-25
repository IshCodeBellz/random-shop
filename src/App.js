import Homepage from "./pages/Home/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import "./styles.css";
import Basket from "./pages/Basket/Basket";
import ProductDetails from "./pages/ProductPage/ProductDetails";
import Reviews from "./pages/Reviews/Reviews";
import { APIContextProvider } from "./context/api-context";
import { BasketContextProvider } from "./context/basket-context";

export default function App() {
  return (
    <APIContextProvider>
      <BasketContextProvider>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/basket" element={<Basket />} />
              {<Route path="/:slug" element={<ProductDetails />} />}
              {/* <Route path="/reviews" element={<Reviews />} /> */}
            </Routes>
          </Router>
        </div>
      </BasketContextProvider>
    </APIContextProvider>
  );
}
