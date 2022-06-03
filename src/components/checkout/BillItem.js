export default function BillItem({ item }) {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <img width="15%" src={"/images/" + item.img} />
            <h5>{item.name}</h5>
            <span className="mr-3">{item.qty}</span>
            <p>{item.price}</p>
        </div>
    );
}
