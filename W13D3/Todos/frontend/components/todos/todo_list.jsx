import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    const receiveTodo = this.props.receiveTodo;
    const removeTodo = this.props.removeTodo;

    const todoList = todos.map(todo => {
      return (
        <TodoListItem 
          key={todo.id}
          todo={todo}
          receiveTodo={receiveTodo}
          removeTodo={removeTodo}/>  
      )
    })

    return (
      <div>
        <h3>Todo List goes here!</h3>
        <ul>
          { todoList }
        </ul>
        <TodoForm receiveTodo={ receiveTodo }/>
      </div>
    )
  }
}

export default TodoList;