import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactCom from "../../Components/Contact Us/ContactUs";
import Post from "../Post/Post";
import HomeCom from "../Home/Home";
import Products from "../Products/Products";
import Counter from "../../../components/Counter/Counter";
import Fees from "../../../components/Fees/Fees";
import FeesList from "../../../components/FeesList/FeesList";
import FeesRedux from "../../../components/FeesRedux/FeesRedux";

const RouteCom = function () {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeCom />} exact={true} />
        <Route path="/Products" element={<Products />} exact={true} />
        <Route path="/Posts" element={<Post />} exact={true} />
        <Route path="/Contact Us" element={<ContactCom />} exact={true} />
        <Route path="/counter" element={< Counter/>} exact={true} />
        <Route path="/fees" element={< Fees/>} exact={true} />
        <Route path="/fees/:action/:id" element={< Fees/>} exact={true} />
        <Route path="/feesredux/:action/:id" element={< FeesRedux/>} exact={true} />
        <Route path="/feesredux/:action" element={< FeesRedux/>} exact={true} />
        
        <Route path="/feesList" element={< FeesList/>} exact={true} />
        
      </Routes>
      </div>
  );
};
export default RouteCom;
