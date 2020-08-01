import React from 'react'
import PropTypes from 'prop-types';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name;

        if (name.length !== 0) {
            console.log('A Todo was submitted: ' + name);
            this.props.addTodo(name);
            this.setState({ name: '', errorMessage: '' });
        } else {
            console.log('A Todo was submitted with no name.');
            this.setState({ errorMessage: 'Cannot add empty Todo.' });
        }
        //reset to blank
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" placeholder="Enter Todo Name"
                    value={this.state.name} onChange={this.handleChange} />
                <small className="m-auto text-danger align-items-center error-message">
                    {this.state.errorMessage}
                </small>
                <input className="form-control btn btn-primary mt-4" type="submit" value="Add" />
            </form>
        );
    }
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;