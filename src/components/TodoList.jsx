import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete, onMark, onEdit }) {
  return (
    <>
      {/* <h3>Todo List:</h3> */}
      <table className="table table-bordered">
        <thead className={todos.length ? "" : "d-none"}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Mark As</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onMark={onMark}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
