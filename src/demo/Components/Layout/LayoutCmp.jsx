import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ContactCom from "../../Components/Contact Us/ContactUs";
import Products from "../../Components/Products/Products";
import HomeCom from "../../Components/Home/Home";
import RouteCom from "../Routes/RoutesCom";

const Layout = function () {
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Products" exact>
                Products
              </Link>
            </li>
            <li>
              <Link to="/Posts" exact>
                Posts
              </Link>
            </li>
            <li>
              <Link to="/Contact Us" exact>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <RouteCom />
      </BrowserRouter>
    </>
  );
};
export default Layout;
