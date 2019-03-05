import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        { value:'Walk The Dog.', id: 3084837930, completed: false },
        { value:'Take Out The Trash.', id: 2073308479, completed: false }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                todos: [...state.todo, newTodo]
            };
        default:
            return state;
    }
}

export default reducer;