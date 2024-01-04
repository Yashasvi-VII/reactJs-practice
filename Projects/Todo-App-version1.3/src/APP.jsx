import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
function App() {
  const demoTodoItems = [
    { name: "BuyMilk", dueDate: "03/04/2022" },
    { name: "BuyBadam", dueDate: "03/04/2022" },
    { name: "BuyKaju", dueDate: "03/04/2022" },
  ];
  const [todoItems, setTodoItems] = useState(demoTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item is ${itemName} and date is ${itemDueDate}`);
  };

  return (
    <>
      <center className="todo-container">
        <TodoName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
