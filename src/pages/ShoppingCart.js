import { NavLink } from "react-router-dom";
import { Button, Card, CardHeader, ListGroup, ListGroupItem } from "reactstrap";
import CartItem from "../components/shoppingcart/CartItem";
import "./ShoppingCart.css";

function ShoppingCart() {
    const disabled = window.cart.length <= 0 ? true : false;

    const productsPrice = () => {
        let total = 0;
        window.cart.map((item) => {
            total += parseFloat(item.price) * item.qty;
        });
        return total.toFixed(3);
    };

    function onCheckoutClick(e) {
        if (disabled) e.preventDefault();
    }

    return (
        <div className="cart-container">
            <Card>
                <CardHeader>
                    <h4>Shopping Cart</h4>
                </CardHeader>
                <ListGroup flush>
                    {window.cart.map((item) => (
                        <ListGroupItem>
                            <CartItem item={item} />
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Card>
            <div className="cart-footer">
                <NavLink to="/">
                    <Button color="primary">Continue shopping</Button>
                </NavLink>
                <div className="checkout">
                    <h1>Total</h1>
                    <p>{productsPrice() + "đ"}</p>
                    <NavLink
                        to="/checkout"
                        state={{ price: productsPrice() + "đ" }}
                        onClick={onCheckoutClick}
                    >
                        <Button color="success" disabled={disabled}>
                            Check out
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
