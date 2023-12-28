//components
// This is functional components
// these days class compenents are not used that much.
import DemoButton from "./Button";
import DynamicComponent from "./DynamicComponent";
import Random from "./ReusableComponent";
function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <DynamicComponent></DynamicComponent>
      <DemoButton></DemoButton>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App;
