import React from 'react';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import ContactCom from '../../Components/Contact Us/ContactUs';
import AddProductCom from '../../Components/Products/addProduct';

const HomeCom = function () {
  return (
    <>
      <div>This is home component</div>
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
              <Link to="/Contact Us" exact>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomeCom />} exact={true} />
          <Route path="/Products" element={<AddProductCom />} exact={true} />
          <Route path="/Contact Us" element={<ContactCom />} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default HomeCom;
