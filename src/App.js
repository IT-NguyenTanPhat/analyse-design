import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ShoppingCart from "./pages/ShoppingCart";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route
                    path="/cart"
                    element={<Navigate replace to="/shopping-cart" />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
