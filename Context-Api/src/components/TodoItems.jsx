import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/Todo-items-store";

const TodoItems = ({ onDeleteClick }) => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

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
    </div>
  );
};

export default TodoItems;
