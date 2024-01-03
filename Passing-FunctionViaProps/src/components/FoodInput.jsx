import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onChange={handleOnChange}
      //  onChange={handleOnChange}; can be written in this way
    />
  );
};

export default FoodInput;
