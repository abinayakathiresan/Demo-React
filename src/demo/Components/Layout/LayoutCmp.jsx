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
              <Link to="/" >
                Home
              </Link>
            </li>
            <li>
              <Link to="/Products" >
                Products
              </Link>
            </li>
            <li>
              <Link to="/Posts" >
                Posts
              </Link>
            </li>
            <li>
              <Link to="/Contact Us" >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/counter">
                Counter
              </Link>
            </li>
            <li>
              <Link to="/fees">
                Fees
              </Link>
            </li>
            <li>
              <Link to="/feesredux/add" >
                Fees Redux
              </Link>
            </li>
            <li>
              <Link to="/feesList">
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
