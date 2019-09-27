import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    const {todos, createTodo, updateTodo, removeTodo, errors} = this.props;

    const todoList = todos.map(todo => {
      return (
        <TodoListItem 
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          createTodo={createTodo}
          removeTodo={removeTodo}/>  
      )
    })

    return (
      <div>
        <h3>Todo List!</h3>
        <ul>
          { todoList }
        </ul>
        <TodoForm createTodo={ createTodo } errors ={errors}/>
      </div>
    )
  }
}

export default TodoList;