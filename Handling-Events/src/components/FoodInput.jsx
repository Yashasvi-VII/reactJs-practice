import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter Food Item here"
      onChange={(event) => handleOnChange(event)}
      //  onChange={handleOnChange}; can be written in this way
    />
  );
};

export default FoodInput;
