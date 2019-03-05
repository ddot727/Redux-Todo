import { ADD_TODO } from '../actions';

const initialState = {
    todos: [
        { value:'Walk The Dog.', completed: false },
        { value:'Take Out The Trash.', completed: false }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                doneStatus: false
            };
            return {
                ...state,
                todos: [...state.todo, newTodo]
            };
        default:
            return state;
    }

}