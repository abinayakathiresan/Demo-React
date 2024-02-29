import React, { useState } from 'react';
import './Products.css';
const Products = function () {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const handleName = function (event) {
    setName(event.target.value);
  };
  const handlePrice = function (event) {
    setPrice(event.target.value);
  };
  const handler = function (event) {
    let product = { name: name, price: price };
    let newProducts = [...products];
    newProducts.push(product);
    setProducts(newProducts);
  };
  return (
    <>
      <div>
        <h2>Add Product</h2>
      </div>
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
        <input type="submit" value="submit" onClick={handler} />
      </div>
      <div>
        <h2>Product List</h2>
        <div class="row">
          <div>Name</div>
          <div>Price</div>
        </div>
        {products.map((item) => {
          return (
            <div class="row" key  = {item.name}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
