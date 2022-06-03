import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="nav">
            <NavLink to="/" className="nav-link">
                <h1>Drug Store</h1>
            </NavLink>

            <NavLink to="/shopping-cart" className="nav-link">
                SHOPPING CART
            </NavLink>
        </header>
    );
}

export default Navbar;
