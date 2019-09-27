export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

export const createTodo = todo => (
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: todo
  })
);

export const updateTodo = todo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/todos/${todo.id}`,
    data: {todo}
  })
)

// window.fetchTodos = fetchTodos;
//fetchTodos().then(todos => console.log(todos))