import {
    Form,
    FormGroup,
    Row,
    Col,
    Input,
    Label,
    Button,
    Alert,
} from "reactstrap";
import { useState } from "react";
import Bill from "./Bill";

export default function CheckoutForm({ total }) {
    const [error, setError] = useState("");
    const [show, setShow] = useState(false);

    function toggle() {
        setShow(!show);
    }

    function empty(str) {
        return !str || str.length === 0;
    }

    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    function onCheckoutSubmit(e) {
        e.preventDefault();

        const name = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        if (empty(name) || empty(email) || empty(phone) || empty(address)) {
            setError("Please fill all information!");
        } else if (phone.length !== 10 || !isNumeric(phone)) {
            setError("Your phone number invalid!");
        } else {
            setError("");
            toggle();
        }
    }

    return (
        <Form style={{ width: "50%" }} onSubmit={onCheckoutSubmit}>
            <FormGroup>
                <Label for="full-name">Full Name</Label>
                <Input
                    id="full-name"
                    name="full-name"
                    placeholder="Your full name"
                />
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Your email"
                            type="email"
                        />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                        />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="address">Address</Label>
                <Input id="address" name="address" placeholder="Your address" />
            </FormGroup>
            {!empty(error) && <Alert color="danger">{error}</Alert>}
            <Button color="success">Check out</Button>
            <Bill show={show} toggle={toggle} total={total} />
        </Form>
    );
}
