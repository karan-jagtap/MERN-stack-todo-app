import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          markDone={this.props.markDone}
          delTodo={this.props.delTodo}
          editTodo={this.props.editTodo} />
      )));
  }
}

/**
 * PropTypes
 * -This is used so that the component using this "TodoList" Component will know
 * that the following are it's props. Otherwise there is no way that the previous
 * state will know what properties the next component have and hence they cannot
 * assign or change them.
 */
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  markDone: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoList;