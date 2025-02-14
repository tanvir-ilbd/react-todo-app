function TodoForm({ form, onInputChange, onFormSubmit }) {
  const getDisabled = () => (form.value ? "" : "disabled");
  return (
    <>
      {/* <h3>Todo Form</h3> */}
      <form onSubmit={(e) => onFormSubmit(e)} className="mb-4">
        <div className="row">
          <div className="col">
            <input
              type="text"
              value={form.value}
              onChange={(e) => onInputChange(e)}
              className="form-control"
              placeholder="Add todo here..."
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={getDisabled()}
            >
              {form.action} Todo
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
