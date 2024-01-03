import styles from "./FoodInput.module.css";

const FoodInput = () => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onChange={(event) => console.log(event.target.value)}
    />
  );
};

export default FoodInput;
