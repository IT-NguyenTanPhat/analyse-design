import "./CheckoutSidebar.css";

export default function CheckoutSidebar({ price, total }) {
    return (
        <div className="sidebar">
            <div className="sidebar-row">
                <p>Price:</p>
                <p style={{ marginLeft: "auto" }}>{price}</p>
            </div>
            <div className="sidebar-row">
                <p>Shipping:</p>
                <p style={{ marginLeft: "auto" }}>30.000đ</p>
            </div>
            <div className="sidebar-row">
                <h2 className="sidebar-heading">Total:</h2>
                <p style={{ marginLeft: "100px", marginTop: "10px" }}>
                    {total}
                </p>
            </div>
        </div>
    );
}
