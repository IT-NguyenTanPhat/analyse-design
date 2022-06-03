import {
    Button,
    ListGroup,
    ListGroupItem,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";

import BillItem from "./BillItem";

export default function Bill({ show, toggle, total }) {
    return (
        <>
            <Modal size="lg" centered isOpen={show}>
                <ModalHeader>Bill</ModalHeader>
                <ModalBody>
                    <ListGroup flush>
                        {window.cart.map((item) => (
                            <ListGroupItem>
                                <BillItem item={item} />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </ModalBody>
                <ModalFooter className="justify-content-between">
                    <p>
                        <strong>Total: </strong>
                        {total}
                    </p>
                    <Button color="primary" onClick={toggle}>
                        Done
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
