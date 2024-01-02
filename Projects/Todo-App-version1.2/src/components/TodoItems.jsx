import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  todoItems.dueDate;
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          TodoName={item.name}
          TodoDate={item.dueDate}
        ></TodoItem>
      ))}
      {/* <TodoItem TodoName="Birthday!" TodoDate={todoItems.dueDate}></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem> */}
    </div>
  );
};

export default TodoItems;
