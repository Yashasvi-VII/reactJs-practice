import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/Todo-items-store";
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

  const defaultTodoItem = [{ name: "Buy Ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider value={defaultTodoItem}>
      <center className="todo-container">
        <TodoName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage todoItem={todoItem} />
        <TodoItems
          todoItems={todoItem}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
