import ProductItem from "./ProductItem";
import { Row } from "reactstrap";

function ProductList({ drugs }) {
    return (
        <Row md={3} xs={2}>
            {drugs.map((drug) => (
                <ProductItem key={drug.key} drug={drug} />
            ))}
        </Row>
    );
}

export default ProductList;
