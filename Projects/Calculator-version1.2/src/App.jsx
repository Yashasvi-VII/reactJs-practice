import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
    } else if (buttonText === "=") {
    } else {
      let newVal = calVal + buttonText;
      setCalval(newVal);
    }
    console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display value={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
