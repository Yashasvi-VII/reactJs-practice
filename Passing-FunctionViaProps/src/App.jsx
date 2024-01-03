import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];
  let TextToShow = "Food Item Entered by User ";
  const handleOnChange = (event) => {
    console.log(event.target.value);
    TextToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="foodHeading">Healthy Food Restraunt</h1>
        <FoodInput handleOnChange={handleOnChange} />
        <p>{TextToShow}</p>
        {/* This is painted once!! only , it gets updated but will show text after app is called  */}
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
