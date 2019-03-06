import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        { value:'Walk The Dog', id: 3084837930, className:'notDone', completed: false },
        { value:'Take Out The Trash', id: 2073308479, className:'notDone', completed: false }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                id: Date.now(),
                className: 'notDone',
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo=> {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } return todo;
                })
            }

        default:
            return state;
    }
}

export default reducer;