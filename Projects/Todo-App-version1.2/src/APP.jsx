import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoName from "./components/TodoName";
import TodoItem from "./components/TodoItem";
function App() {
  return (
    <center className="todo-container">
      <TodoName />
      <AddTodo />
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem>
      <TodoItem TodoName="Birthday!" TodoDate="03/04/2022"></TodoItem>
    </center>
  );
}

export default App;
