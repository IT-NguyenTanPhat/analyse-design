import { Alert, Button } from "reactstrap";

export default function Dialog({ show, toggle }) {
    return (
        <Alert isOpen={show} color="success p-3">
            <div className="d-flex justify-content-between">
                <p className="m-0">Success!</p>
                <Button close onClick={toggle} />
            </div>
        </Alert>
    );
}
