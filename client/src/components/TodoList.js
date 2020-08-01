import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markDone={this.props.markDone}
          delTodo={this.props.delTodo} />
      )));
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  markDone: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoList;