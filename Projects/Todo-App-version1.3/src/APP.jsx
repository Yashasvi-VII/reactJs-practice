import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    { name: "BuyMilk", dueDate: "03/04/2022" },
    { name: "BuyBadam", dueDate: "03/04/2022" },
    { name: "BuyKaju", dueDate: "03/04/2022" },
  ];
  return (
    <>
      <center className="todo-container">
        <TodoName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
