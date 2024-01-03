import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  return (
    <div className={styles.calculator}>
      {/* <input type="text" className={styles.display} /> */}
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
