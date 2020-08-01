import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input className="todo-checkbox" type="checkbox"
          defaultChecked={this.props.done}
          onChange={this.props.markDone.bind(this, this.props.todo.name)} />&nbsp;
        <span className="todo-title">
          {this.props.todo.name}
        </span>
        <button className="todo-delete-icon"
          onClick={this.props.delTodo.bind(this, this.props.todo.name)}>
          <i className="m-auto fas fa-trash-alt mr-3 text-danger"></i>
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markDone: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;