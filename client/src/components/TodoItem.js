import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        {/* CheckBox */}
        <input className="todo-checkbox" type="checkbox"
          defaultChecked={this.props.todo.done}
          onChange={this.props.markDone.bind(this, this.props.todo.id)} />&nbsp;
        {/* Todo Name */}
        <span style={this.props.todo.done ? { textDecoration: 'line-through' } : {}}>
          {this.props.todo.name}
        </span>
        {/* Edit Button */}
        <button className="todo-delete-icon"
          onClick={this.props.editTodo.bind(this, this.props.todo.id, this.props.todo.name)}>
          <i className="m-auto fas fa-pen mr-3 text-danger"></i>
        </button>
        {/* Delete Button */}
        <button className="todo-delete-icon"
          onClick={this.props.delTodo.bind(this, this.props.todo.id)}>
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
  editTodo: PropTypes.func.isRequired
};

export default TodoItem;