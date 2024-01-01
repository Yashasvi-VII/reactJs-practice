const ErrorMessage = () => {
  let foodItems = ["Dal", "Salad", "Green Vegetables", "Milk"];

  return <>{foodItems.length == 0 && <h3>Resturant out of stock</h3>}</>;
};

export default ErrorMessage;
