import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food Restraunt</h1>
        <FoodInput />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Above is list of healty food that are good for your well being</p>
      </Container> */}
    </>
  );
}

export default App;
