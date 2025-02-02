function TodoItem({ todo, onDelete, onMark, onEdit }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.status ? <strike>{todo.title}</strike> : todo.title}</td>
      <td>{todo.status ? "Complete" : "Pending"}</td>
      <td>
        <button
          onClick={() => onMark(todo.id)}
          className={
            todo.status ? "btn btn-warning btn-sm" : "btn btn-success btn-sm"
          }
        >
          {todo.status ? "Pending" : "Complete"}
        </button>
      </td>
      <td>
        <button
          onClick={() => onEdit(todo.id)}
          className="btn btn-primary btn-sm"
        >
          Edit
        </button>
      </td>
      <td>
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
