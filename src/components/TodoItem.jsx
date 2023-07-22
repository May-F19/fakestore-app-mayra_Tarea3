const TodoItem = ({ list, addTodo, removeTodo }) => {
	return(
		<li>
			<input 
				type="checkbox"
				checked={todo.done}
				onChange={({target}) => updateTodo(target.value)}	></input>
		</li>
	);

};

export default TodoItem;