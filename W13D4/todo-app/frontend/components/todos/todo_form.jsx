import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState(prop) {
    return e => {
      this.setState({[prop]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.createTodo({ todo }).then(
      () => this.setState({ title: '', body: '' })
    );
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        {this.props.errors} <br></br>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.updateState('title')}/>
        <label htmlFor="body">Body</label>
        <input id="body" type="text" value={this.state.body} onChange={this.updateState('body')}/>
        <input type="submit"/>
      </form>
    )
  }
}

export default TodoForm;