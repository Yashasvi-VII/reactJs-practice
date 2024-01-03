const Item = (props) => {
  // object destructuring
  let { foodItem } = props;
  return (
    <li className="list-group-item demo-item">
      <span className="demo-span">{foodItem}</span>
    </li>
  );
  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
