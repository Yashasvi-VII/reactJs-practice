import styles from "./Item.module.css";
const Item = (props) => {
  // object destructuring
  let { foodItem } = props;
  return (
    <li className={`${styles["demo-item"]} list-group-item`}>
      <span className={styles["demo-span"]}>{foodItem}</span>
    </li>
  );
  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
