import TodoItem from './components/TodoItem'

const todos = [
	{
		title: 'Finish the essay collaboration',
		isCompleted: false,
	},
	{
		title: 'Read next chapter of the book',
		isCompleted: false,
	},
	{
		title: 'Send the finished assignment',
		isCompleted: false,
	},
]

const App = () => {
	return (
		<div className='bg-gray-900 h-screen text-white'>
			{todos.map(todo => (
				<TodoItem todo={todo} />
			))}
		</div>
	)
}

export default App
