import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./ components/foodItems";
import ErrorMessage from "./ components/errorMessage";
function App() {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];

  return (
    <>
      <h1>Healthy Food Restraunt</h1>
      <ErrorMessage />
      <FoodItems />
    </>
  );
}

export default App;
