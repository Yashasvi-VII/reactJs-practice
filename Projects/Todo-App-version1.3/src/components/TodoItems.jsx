import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
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
