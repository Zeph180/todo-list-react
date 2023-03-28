/* eslint-disable react/prop-types */
import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={title}
        placeholder="Add todo...."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default InputTodo;
