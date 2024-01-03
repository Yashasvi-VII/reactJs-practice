import styles from "./Item.module.css";
const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className={`${styles["demo-item"]} list-group-item`}>
      <span className={styles["demo-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
