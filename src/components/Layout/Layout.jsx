import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import { Loader } from "./Loader/Loader";
import Footer from "components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Suspense fallback="Loading...">
                <Outlet />
            </Suspense>

            <Footer />
        </>
    )
}

export default Layout;