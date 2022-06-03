import { useState } from "react";
import { Button, Input } from "reactstrap";
import "./CartItem.css";
import { useNavigate } from "react-router-dom";

function CartItem({ item }) {
    const [qty, setQty] = useState(item.qty);
    const idx = window.cart.findIndex((x) => x.key === item.key);
    const navigate = useNavigate();

    function onQtyChange(e) {
        const value = e.target.value > 1 ? e.target.value : 1;

        window.cart[idx].qty = value;
        setQty(value);
    }

    function onRemoveClick() {
        window.cart.splice(idx, 1);
        navigate("/cart");
    }

    return (
        <div className="cart-item">
            <img width="15%" src={"/images/" + item.img} />
            <h4>{item.name}</h4>
            <div className="input-group-qty">
                <Input
                    className="cart-qty"
                    type="number"
                    value={qty}
                    onChange={onQtyChange}
                />
            </div>
            <p>{item.price}</p>
            <Button className="cart-btn" color="danger" onClick={onRemoveClick}>
                Remove
            </Button>
        </div>
    );
}

export default CartItem;
