import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/Todo-items-store";
import { useState, useReducer } from "react";

const todoItemReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
  }
  return newTodoItems;
};

function App() {
  //const [todoItem, setTodoItem] = useState([]);
  const [todoItem, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItem(newItemAction);
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
