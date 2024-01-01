const Item = (props) => {
  // object destructuring
  let { foodItem } = props;
  return <li className="list-group-item">{foodItem}</li>;
  //   return <li className="list-group-item">{props.foodItem}</li>;
};

export default Item;
