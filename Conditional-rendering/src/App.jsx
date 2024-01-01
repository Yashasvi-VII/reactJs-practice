import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let foodItems=["Dal", "Salad", "Green Vegetables", "Milk"];
  let foodItems = [];

  // First way of Conditional Rendering
  // if (foodItems.length == 0) {
  //   return <h3>Resturant out of stock</h3>;
  // }

  return (
    <>
      <h1>Healthy Food Restraunt</h1>
      {/* Ternary operator method */}
      {/* {foodItems.length == 0 ? <h3>Resturant out of stock</h3> : null} */}
      {/* Logical operator method */}
      {foodItems.length == 0 && <h3>Resturant out of stock</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
