import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/Todo-items-store";
import { useState } from "react";
function App() {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItem,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItem(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
  };

  const defaultTodoItem = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <TodoName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
