import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import ContactCom from "../../Components/Contact Us/ContactUs";
import Products from "../../Components/Products/Products";
import HomeCom from "../../Components/Home/Home";
import RouteCom from "../Routes/RoutesCom";
import "./LayoutCmp.css";
const Layout = function () {
  return (
    <>
      <BrowserRouter>
        <div className="layout__header container">
          <div className="layout__logo">Logo</div>
          <div className="layout__nav">
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
            <li>
              <Link to="/counter" exact>
                Counter
              </Link>
            </li>
            <li>
              <Link to="/fees" exact>
                Fees
              </Link>
            </li>
            <li>
              <Link to="/feesredux/add" exact>
                Fees Redux
              </Link>
            </li>
            <li>
              <Link to="/feesList" exact>
                Fees list
              </Link>
            </li>
          </ul>
          </div>
        </div>
        <RouteCom />
      </BrowserRouter>
    </>
  );
};
export default Layout;
