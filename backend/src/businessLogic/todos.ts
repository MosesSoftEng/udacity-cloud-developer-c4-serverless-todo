/**
 * Handle all logic for todos here.
 */

// Import todoAccess class which has logic for todos.
import { TodosAccess } from '../dataLayer/todosAcess'

// Import todoItem table interface model for type-safety.
import { TodoItem } from '../models/TodoItem'

// Create a new class instance/ object of todoAccess.
const todoAccess = new TodosAccess()

export async function getTodosForUser(userId: string): Promise<TodoItem[]> {
	return await todoAccess.getTodosForUser(userId);
}
