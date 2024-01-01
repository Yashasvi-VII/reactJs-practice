import Item from "./item";

const FoodItems = () => {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
