//components
// This is functional components
// these days class compenents are not used that much.
import DemoButton from "./Button";
import DynamicComponent from "./DynamicComponent";
function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <DynamicComponent />
      <DemoButton></DemoButton>
    </div>
  );
}

export default App;
