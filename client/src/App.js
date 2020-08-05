import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { Col, Row, Card, CardHeader, CardBody } from 'reactstrap';
//this function gets state from redux to react components
import { connect } from 'react-redux';
import { getTodos, deleteTodo, editTodo, markDone, addTodo } from './actions/todoActions';
import PropTypes from 'prop-types';

class App extends React.Component {

  componentDidMount() {
    this.props.getTodos();
  }

  /**
   * Instead of using all these different functions for CRUD operations separately,
   * it can be done in JSX itself. But for better understanding of different use cases
   * it is done in separate functions.
   */

  /**
   * AddToDo
   */
  addTodo = (name) => {
    //using redux
    this.props.addTodo(name);

    //using component state
    /*this.setState({
      todos: [...this.state.todos, {
        id: (++this.id),
        name: name,
        done: false
      }]
    }, () => console.log(this.state.todos));
    console.log("id = " + this.id);*/
  }

  /**
   * MarkDone
   */
  markDone = id => {
    //using redux
    this.props.markDone(id);

    //using component state
    /*this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === name) {
          todo.done = !todo.done;
        }
        return todo;
      })
    });*/
  }

  /**
   * DelTodo
   */
  delTodo = id => {
    //using component state
    /*this.setState({
      todos: [...this.state.todos.filter(todo => todo.name !== name)]
    });*/

    //using redux
    this.props.deleteTodo(id);
  }

  /**
   * EditTodo
   */
  editTodo = (id, name) => {
    const newName = prompt('Edit Todo', name);
    //using redux
    this.props.editTodo(id, newName);

    //using component state
    /*this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.name === name) {
          todo.name = newName;
        }
        return todo;
      })
    })*/
  }

  render() {
    const { todos } = this.props.todo;
    let element = '';
    if (todos.length !== 0) {
      element = <TodoList
        todos={todos}
        markDone={this.markDone}
        delTodo={this.delTodo}
        editTodo={this.editTodo} />;
      console.log("size = " + todos.length);
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

const mapStateToProps = (state) => ({
  todo: state.todo
})

//whenever you bring action from redux it will be used as prop in react
App.protoType = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  markDone: PropTypes.func.isRequired
}

//export default App;
// export using connect function for react-redux
export default connect(mapStateToProps, { getTodos, deleteTodo, editTodo, markDone, addTodo })(App)
