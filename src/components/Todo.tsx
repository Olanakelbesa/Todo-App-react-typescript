import React, { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../todoService";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css";

const Todo = () => {
	const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
	const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
	const [editingTodoText, setEditingTodoText] = useState<string>("");

	const handleEditingStart = (id: number, text: string) => {
		setEditingTodoId(id);
		setEditingTodoText(text);
	};

	const handleEditingCancel = () => {
		setEditingTodoId(null);
		setEditingTodoText("");
	};

	const handleEditedSave = (id: number) => {
		if (editingTodoText.trim() !== "") {
			const updatedTodo = TodoService.updateTodo({
				id,
				text: editingTodoText,
				completed: false,
			});
			setTodos((prevTodos) =>
				prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
			);
			setEditingTodoId(null);
			setEditingTodoText("");
		}
	};

	const handleDelete = (id: number) => {
		TodoService.deleteTodo(id);
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div className="todoContainer">
			<div>
				<TodoForm setTodos={setTodos} />
			</div>
			{todos.map((todo) => (
				<div className="items" key={todo.id}>
					{editingTodoId === todo.id ? (
						<div className="editingText">
							<input
								type="text"
								value={editingTodoText}
								onChange={(e) => setEditingTodoText(e.target.value)}
								autoFocus={true}
							/>
							<button onClick={() => handleEditedSave(todo.id)}>
								<FaCheck />
							</button>
							<button onClick={handleEditingCancel}>
								<GiCancel />
							</button>
						</div>
					) : (
						<div className="editBtn">
							<span>{todo.text}</span>
							<button
								className="editBtnIcon"
								onClick={() => handleEditingStart(todo.id, todo.text)}
							>
								<FaEdit />
							</button>
							<button onClick={() => handleDelete(todo.id)}></button>
						</div>
					)}
					<button className="deleteBtn" onClick={() => handleDelete(todo.id)}>
						<RiDeleteBin5Fill />
					</button>
				</div>
			))}
		</div>
	);
};

export default Todo;
