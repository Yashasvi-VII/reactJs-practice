function TodoItem2() {
  let TodoName = "Go to college";
  let TodoDate = "5/11/23";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
