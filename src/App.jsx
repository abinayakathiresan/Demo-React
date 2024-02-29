import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClassCmp from './components/ClassCmp/ClassCmp';
import FunctionCmp from './components/FunctionCmp/FunctionCmp';
//import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
function App() {
  const parentFun = (data) => {
    alert(data);
  };
  const ctopFun = (text) => {
    alert(text);
  };
  return (
    <>
    </>
  /*  <BrowserRouter>
      <div>App component</div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/" exact>
              Home
            </Link>
          </li>
          <li>
            <Link to="/hello-function" exact>
              Function
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<ClassCmp />} exact={true} />

        <Route
          path="/hello-function"
          element={<FunctionCmp parentFun={parentFun} ctopFuninchild={ctopFun} />}
          exact={true}
        />

        <Route element={<FunctionCmp />} />

        <Route render={() => <FunctionCmp category="page-not-found" />} />
      </Routes>
    </BrowserRouter> */
  );
}

export default App;
