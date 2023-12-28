// Demostration of Dynamic component,{}
function Hello() {
  //   let myName = "yashasvi";

  // Method
  let fullName = () => {
    return "yashasvi";
  };
  return <h3>Hello {fullName()} Future is Calling You</h3>;
}

export default Hello;
