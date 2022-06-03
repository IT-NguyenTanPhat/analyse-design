import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Col,
    CardFooter,
} from "reactstrap";
import "./ProductItem.css";
import { useState } from "react";
import Dialog from "../ui/Dialog";

function ProductItem({ drug }) {
    const [show, setShow] = useState(false);

    if (show) {
        setTimeout(() => {
            toggle();
        }, 3000);
    }

    function toggle() {
        setShow(!show);
    }

    function onAddToCartClick() {
        toggle();

        drug = {
            ...drug,
            qty: 1,
        };

        const idx = window.cart.findIndex((x) => x.key === drug.key);

        if (idx >= 0) {
            window.cart[idx].qty++;
        } else {
            window.cart = [...window.cart, drug];
        }
    }

    return (
        <Col className="mb-4">
            <Card className="card h-100">
                <CardImg
                    className="card-img"
                    alt="Card image cap"
                    src={"/images/" + drug.img}
                    top
                />
                <CardBody>
                    <CardTitle tag="h4">{drug.name}</CardTitle>
                    <CardSubtitle className="my-2 text-muted" tag="h5">
                        {drug.price}
                    </CardSubtitle>
                    <CardText>{drug.desc}</CardText>
                    <Dialog show={show} toggle={toggle} />
                </CardBody>
                <CardFooter>
                    <Button color="success" onClick={onAddToCartClick}>
                        Add to cart
                    </Button>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default ProductItem;
