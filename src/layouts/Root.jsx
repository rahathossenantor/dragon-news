import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const Root = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 border">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;