export const ADD_TODO = 'ADD_TODO';

export const addTodo = todoName => {
    return {
        type: ADD_TODO,
        payload: todoName
    }
}