import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      let newVal = calVal + buttonText;
      setCalval(newVal);
    }
    // console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display value={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
