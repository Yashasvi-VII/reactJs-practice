import styles from "./Item.module.css";
const Item = (props) => {
  // object destructuring
  let { foodItem } = props;
  return (
    <li className={`${styles["demo-item"]} list-group-item`}>
      <span className={styles["demo-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={() => console.log(`${foodItem} Being Clicked`)}
      >
        Buy
      </button>
    </li>
  );
  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
