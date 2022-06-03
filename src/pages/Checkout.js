import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSidebar from "../components/checkout/CheckoutSidebar";
import { useLocation } from "react-router-dom";

function Checkout() {
    const location = useLocation();
    const { price } = location.state;

    function total() {
        const res = 30 + parseFloat(price);
        return res.toFixed(3) + "đ";
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <CheckoutForm total={total()} />
            <CheckoutSidebar price={price} total={total()} />
        </div>
    );
}

export default Checkout;
