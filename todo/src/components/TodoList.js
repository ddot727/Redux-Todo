import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    }

    render() {
        return (
            <>
        <div className="todo-list">
          {this.props.todoList.map(todo => (
            <h4 key={todo.id}>
              {todo.value}
              {todo.completed}
            </h4>
          ))}
        </div>
        <input
          type="text"
          name="newTodo"
          value={this.state.newTodo}
          onChange={this.handleChanges}
          placeholder="Add new todo"
        />
        <button onClick={this.addTodo}>Add todo</button>
      </>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todos
  });
  
export default connect(
    mapStateToProps,
    { addTodo }
  )(TodoList);
  