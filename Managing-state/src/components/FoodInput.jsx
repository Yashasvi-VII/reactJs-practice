import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onKeyDown={handleKeyDown}
      //  onChange={handleOnChange}; can be written in this way
    />
  );
};

export default FoodInput;
