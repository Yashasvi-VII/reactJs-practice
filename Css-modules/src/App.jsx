import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];

  return (
    <>
      <h1 className="foodHeading">Healthy Food Restraunt</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
