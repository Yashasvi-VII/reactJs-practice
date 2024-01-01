import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //"Dal", "Salad", "Green Vegetables", "Milk"
  let foodItems = [];

  // First way of Conditional Rendering
  if (foodItems.length == 0) {
    return <h3>Resturant Out of Stock</h3>;
  }

  return (
    <>
      <h1>Healthy Food</h1>
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
