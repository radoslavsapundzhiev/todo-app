import TodoService from "../services/TodoService";

export async function load() {
    const todos = await TodoService.getTodos();
	return {
		todos
	};
}