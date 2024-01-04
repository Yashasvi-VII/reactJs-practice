import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import { useState } from "react";
function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItem,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
    console.log(todoItemName);
  };

  return (
    <>
      <center className="todo-container">
        <TodoName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItem.length === 0 && <WelcomeMessage />}
        <TodoItems
          todoItems={todoItem}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}
export default App;
