import styles from "./AddTodo.module.css";
const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.inputText}
            type="text"
            placeholder="Enter TODO here "
          />
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
