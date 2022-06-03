import Navbar from "./Navbar";
import { Fragment } from "react";
import "./Layout.css";

function Layout(props) {
    return (
        <Fragment>
            <Navbar />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
