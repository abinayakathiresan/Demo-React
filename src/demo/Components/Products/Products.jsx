import React, { useState } from "react";
import axios from "axios";
import "./Products.css";
const Products = function () {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const handleName = function (event) {
    setName(event.target.value);
  };
  const handlePrice = function (event) {
    setPrice(event.target.value);
  };
  const submitHandler = function (event) {
    if (productId == "") {
      let productId = Math.random(5, 99);
      let product = { productId: productId, name: name, price: price };
      let newProducts = [...products];
      newProducts.push(product);
      setProducts(newProducts);
    } else {
      let copyProducts = [...products];
      copyProducts = copyProducts.map((item) => {
        return item.productId === productId
          ? { productId: productId, name: name, price: price }
          : item;
      });
      setProducts(copyProducts);
    }

    handleReset();
  };
  const handleReset = function () {
    setProductId("");
    setName("");
    setPrice("");
  };
  const editHandler = function (item) {
    setProductId(item.productId);
    setName(item.name);
    setPrice(item.price);
  };
  const deleteHandler = function (item) {
    let copyProducts = [...products];
    copyProducts = copyProducts.filter((product) => {
      return product.productId !== item.productId;
    });
    setProducts(copyProducts);
  };

  return (
    <>
      <div>
        <h2>Add Product</h2>
      </div>
      <input type="hidden" value={productId} />
      <div>
        Name: <input type="text" value={name} onChange={handleName} />
      </div>
      <div>
        Price: <input type="number" value={price} onChange={handlePrice} />
      </div>
      <div>
        Category:
        <select name="category">
          <option value="mobile">Mobile</option>
          <option value="tab">Tab</option>
          <option value="labtop">Laptop</option>
        </select>
      </div>
      <div>
        <input type="submit" value="submit" onClick={submitHandler} />
        <input type="reset" value="Reset" onClick={handleReset} />
      </div>
      <div>
        <h2>Product List</h2>
        <div class="row">
          <div>Name</div>
          <div>Price</div>
        </div>
        {products.map((item) => {
          return (
            <div class="row" key={item.name}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>
                <button onClick={() => editHandler(item)}>Edit</button>
              </div>
              <div>
                <button onClick={() => deleteHandler(item)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
