import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';

class App extends React.Component {

  id = 0;
  state = {
    todos: []
  };

  /**
   * AddToDo --> State level
   */
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

  /**
   * MarkDone --> State level
   */
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

  /**
   * DelTodo --> State level
   */
  delTodo = (name) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.name !== name)]
    });
  }


  /**
   * EditTodo --> State level
   */
  editTodo = (name) => {
    const newName = prompt('Enter Todo', name);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === name) {
          todo.name = newName;
        }
        return todo;
      })
    })
  }

  render() {
    let element = '';
    if (this.state.todos.length !== 0) {
      element = <TodoList
        todos={this.state.todos}
        markDone={this.markDone}
        delTodo={this.delTodo}
        editTodo={this.editTodo} />;
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
              <Row className="mt-4">
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <h3><i className="fas fa-plus-square mr-3"></i>Add Item</h3>
                    </CardHeader>
                    <CardBody>
                      <TodoForm addTodo={this.addTodo} />
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card>
                    <CardHeader>
                      <h3><i className="fas fa-list-alt mr-3"></i>Todos...</h3>
                    </CardHeader>
                    <CardBody>
                      <div className="todo-list">
                        {element}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </React.Fragment>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
