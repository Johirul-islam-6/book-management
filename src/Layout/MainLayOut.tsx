import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const MainLayOut = () => {
    return (
        <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </>
    );
};

export default MainLayOut;