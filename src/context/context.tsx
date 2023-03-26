import * as React from "react";
import { TodoContextType, ITodo } from "../types/todo";

// this is my context
export const MyToDoListContext = React.createContext<TodoContextType | any>('');

interface ChildrenProps {
	children: JSX.Element[] | React.ReactElement | React.ReactNode
}

const TodoProvider = ({ children }: ChildrenProps) => {
	const [todos, setTodos] = React.useState<ITodo[]>([
		{
			id: 1,
			title: "post 1",
			description: "this is a description",
			status: false,
		},
		{
			id: 2,
			title: "post 2",
			description: "this is a description",
			status: true,
		},
	]);

	const saveTodo = (todo: ITodo) => {
		const newTodo: ITodo = {
			id: Math.random(), //generates a random number
			title: todo.title,
			description: todo.description,
			status: false,
		}

		setTodos([...todos, newTodo])
	}

	const updateTodo = (id: number) => {
		todos.filter((todo: ITodo) => {
			if (todo.id === id) {
				todo.status = true

				setTodos([...todos])
			}
		})
	}

	return (
		<MyToDoListContext.Provider value={{ todos, saveTodo, updateTodo }}>
			{ children }
		</MyToDoListContext.Provider>
	)
};

export default TodoProvider;
