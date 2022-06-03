import { useEffect } from "react";
import { getAllDrugs } from "../api/api";
import ProductList from "../components/products/ProductList";
import Loader from "../components/ui/Loader";
import useHttp from "../hooks/use-http";
import NotFound from "./NotFound";

window.cart = [];

function Home() {
    // Load data
    const { sendRequest, status, data, error } = useHttp(getAllDrugs, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === "pending") return <Loader />;

    if (error) return <h1>{error}</h1>;

    if (status === "completed" && (!data || data.length === 0))
        return <NotFound />;

    return (
        <>
            <ProductList drugs={data} />
        </>
    );
}

export default Home;
