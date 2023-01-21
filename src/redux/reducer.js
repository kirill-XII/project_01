import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actions'

const initialState = {
	todos: [],
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, { id: Date.now(), text: action.text }],
			}
		case EDIT_TODO:
			return {
				...state,
				todos: state.todos.map(todo => {
					if (todo.id === action.id) {
						return { ...todo, text: action.text }
					}
					return todo
				}),
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id),
			}
		default:
			return state
	}
}
