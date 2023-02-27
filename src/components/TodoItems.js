/* eslint-disable react/prop-types */
const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    <button onClick={() => delTodo(itemProp.id)} type="button">Delete</button>
    {itemProp.title}
  </li>
);
export default TodoItem;
