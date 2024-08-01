import React, { Dispatch, SetStateAction, useState } from "react";
import TodoService from "../todoService";
import TodoTypes from "../todo";
import "../CSS/TodoForm.css";

interface PropsTypes {
	setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm: React.FC<PropsTypes> = ({ setTodos }) => {
	const [newTodoText, setNewTodoText] = useState<string>("");

	const handleAddTodo = () => {
		if (newTodoText.trim() !== "") {
			const newTodo = TodoService.addTodos(newTodoText);
			setTodos((prevTodo) => [...prevTodo, newTodo]);
			setNewTodoText("");
		}
	};
	return (
		<div className="inputForm">
			<input
				type="text"
				value={newTodoText}
				onChange={(e) => setNewTodoText(e.target.value)}
				autoFocus={true}
				placeholder="Add a task"
			/>
			<button onClick={handleAddTodo}>Add</button>
		</div>
	);
};

export default TodoForm;
