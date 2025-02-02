import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Task 1", status: false },
  //   { id: 2, title: "Task 2", status: true },
  //   { id: 3, title: "Task 3", status: false },
  // ]);

  const [todos, setTodos] = useState(() => {
    let savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [form, setForm] = useState({
    id: Math.random(),
    value: "",
    action: "Add",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onInputChange = (e) => {
    let clonedForm = { ...form };
    clonedForm.value = e.target.value;
    setForm(clonedForm);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let clonedTodos = [...todos];
    if (form.action === "Add") {
      clonedTodos.push({ id: Date.now(), title: form.value, status: false });
    } else {
      let index = clonedTodos.findIndex((todo) => todo.id == form.id);
      clonedTodos[index].title = form.value;
    }
    setTodos(clonedTodos);
    // reset form
    setForm({ id: Math.random(), value: "", action: "Add" });
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const onMark = (id) => {
    const index = todos.findIndex((todo) => todo.id == id);
    let clonedTodos = [...todos];
    clonedTodos[index].status = clonedTodos[index].status ? false : true;
    setTodos(clonedTodos);
  };

  const onEdit = (id) => {
    let index = todos.findIndex((todo) => todo.id == id);
    setForm({ id: id, value: todos[index].title, action: "Save" });
  };

  return (
    <div className="container">
      <h1 className="mb-4 mt-4">Todo App!</h1>
      <TodoForm
        form={form}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
      />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onMark={onMark}
        onEdit={onEdit}
      />
    </div>
  );
}
export default TodoApp;
