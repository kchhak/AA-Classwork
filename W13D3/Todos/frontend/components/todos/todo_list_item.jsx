import React from 'react';

class TodoListItem extends React.Component{
  constructor(props) {
    super(props);
    this.removeTodoItem = this.removeTodoItem.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  removeTodoItem(todo) {
    return () => {
      this.props.removeTodo(this.props.todo);
    }
  }

  toggleDone(e) {
    e.preventDefault();
    let newTodo = Object.assign({}, this.props.todo, {done: this.props.todo.done? false: true})
    console.log(newTodo);
    this.props.receiveTodo(newTodo)
  }

  render(){
    const todo = this.props.todo;

    return(
      <div>
        <li>{todo.title}
          <button onClick={this.removeTodoItem(todo)}>Remove</button>
          <button onClick={this.toggleDone}>{todo.done ? "Undo" : "Done"}</button>
        </li>
      </div>

    )
  }
}

export default TodoListItem;
// id: 1,
//   title: "wash car",
//     body: "with soap",
//       done: false