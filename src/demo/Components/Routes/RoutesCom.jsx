import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactCom from "../../Components/Contact Us/ContactUs";
import Post from "../Post/Post";
import HomeCom from "../Home/Home";
import Products from "../Products/Products";

const RouteCom = function () {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeCom />} exact={true} />
        <Route path="/Products" element={<Products />} exact={true} />
        <Route path="/Posts" element={<Post />} exact={true} />
        <Route path="/Contact Us" element={<ContactCom />} exact={true} />
      </Routes>
    </>
  );
};
export default RouteCom;
