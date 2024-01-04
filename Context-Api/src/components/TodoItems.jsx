import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  const todoItemsfromContext = useContext(TodoItemsContext);
  console.log(todoItemsfromContext);
  todoItems.dueDate;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          TodoName={item.name}
          TodoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
      {/* <TodoItem TodoName="Birthday!" TodoDate={todoItems.dueDate}></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
