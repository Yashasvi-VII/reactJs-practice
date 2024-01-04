import { useState } from "react";
import styles from "./AddTodo.module.css";
const AddTodo = ({ onNewItem }) => {
  const [TodoName, setTodoName] = useState();
  const [DueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(TodoName, DueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.inputText}
            type="text"
            placeholder="Enter TODO here "
            value={TodoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-3">
          <input type="date" value={DueDate} onChange={handleDateChange} />
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
