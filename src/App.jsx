import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./components/ProductListing";
import Layout from "./components/Layout";
import CheckoutPage from "./components/CheckoutPage";
import { CartProvider } from "./components/contextAPIs/CartContextAPI";
import ReviewSubmit from "./components/ReviewSubmit";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ProductListing />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/review-submit" element={<ReviewSubmit />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
