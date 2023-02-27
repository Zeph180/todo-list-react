/* eslint-disable react/prop-types */
const TodoItem = ({ itemProp, setTodos }) => (
  <li>
    <input type="checkbox" checked={itemProp.completed} onChange={() => console.log('cllloo')} />
    {itemProp.title}
  </li>
);
export default TodoItem;
