export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions'

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => {
  return APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)));
};

export const createTodo = todo => dispatch => {
  return APIUtil.createTodo(todo).then(
    todo => {dispatch(receiveTodo(todo));
      dispatch(clearErrors())},
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const updateTodo = todo => dispatch => (
  APIUtil.updateTodo(todo).then(todo => dispatch(receiveTodo(todo)))
);


window.removeTodo = removeTodo;
window.fetchTodos = fetchTodos;
window.createTodo = createTodo;
window.updateTodo = updateTodo;