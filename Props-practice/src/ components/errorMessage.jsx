const ErrorMessage = ({ items }) => {
  return <>{items.length == 0 && <h3>Resturant out of stock</h3>}</>;
};

export default ErrorMessage;
