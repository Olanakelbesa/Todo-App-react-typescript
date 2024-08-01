import { FaPen, FaClipboardList } from "react-icons/fa";
import TodoList from "./components/Todo";
import "./CSS/App.css";

function App() {
	return (
		<div className="App">
			<div className="header">
				<div className="logoside">
					<FaPen />
					<h1>ToDo App</h1>
					<FaClipboardList />
				</div>
			</div>
			<TodoList />
		</div>
	);
}

export default App;
