import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';

class App extends React.Component {

  id = 0;
  state = {
    todos: []
  };

  addTodo = (name) => {
    this.setState({
      todos: [...this.state.todos, {
        id: (++this.id),
        name: name,
        done: false
      }]
    }, () => console.log(this.state.todos));
    console.log("id = " + this.id);
  }

  markDone = (name) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === name) {
          todo.done = !todo.done;
        }
        return todo;
      })
    });
  }

  delTodo = (name) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.name !== name)]
    });
  }

  /**
   * Tempory
   */

  render() {
    let element = '';
    if (this.state.todos.length !== 0) {
      element = <TodoList
        todos={this.state.todos}
        markDone={this.markDone}
        delTodo={this.delTodo} />;
      console.log("size = " + this.state.todos.length);
    } else {
      element = <small>Todo List empty</small>;
    }
    return (
      <Router>
        <Header />
        <div className="container" >
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="row content">
                <div className="col-md-6 mt-4">
                  <div className="card">
                    <div className="card-header">
                      <h3><i className="fas fa-plus-square mr-3"></i>Add Item</h3>
                    </div>
                    <div className="card-body">
                      <TodoForm addTodo={this.addTodo} />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-4">
                  <div className="card">
                    <div className="card-header">
                      <h3><i className="fas fa-list-alt mr-3"></i>Todos...</h3>
                    </div>
                    <div className="card-body">
                      <div className="todo-list">
                        {element}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
