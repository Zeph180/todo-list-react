/* eslint-disable react/prop-types */

import TodoItem from './TodoItems';

const TodosList = (props) => {
  const { todosProps, handleChange, delTodo } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} />
      ))}
    </ul>
  );
};
export default TodosList;
