/* eslint-disable react/prop-types */

import TodoItem from './TodoItems';

const TodosList = (props) => {
  const { todosProps, setTodos } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
};
export default TodosList;
