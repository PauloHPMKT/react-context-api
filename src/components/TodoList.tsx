import { FormEvent, useContext, useState } from "react"
import { MyToDoListContext } from "../context/context"
import { TodoContextType, ITodo } from "../types/todo"

const TodoList = () => {
	const { saveTodo } = useContext(MyToDoListContext) as TodoContextType
	const [formData, setFormData] = useState<ITodo | []>([])

	const handleForm = (e: FormEvent<HTMLInputElement>): void => {
		setFormData({
			...formData,
			[e.currentTarget.id]: e.currentTarget.value
		})
	}

	const handleSaveTodo = (e: FormEvent, formData: ITodo | any): void => {
		e.preventDefault()

		saveTodo(formData)
	}

	return(
		<form onSubmit={(e) => handleSaveTodo(e, formData)}>
			<div>
				<div>
					<label htmlFor="name">Title</label>
					<input type="text" onChange={handleForm} id="title" />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<input type="text" onChange={handleForm} id="description" />
				</div>
			</div>
			<button disabled={formData === undefined ? true : false}>Add Task</button>
		</form>
	)
}

export default TodoList
