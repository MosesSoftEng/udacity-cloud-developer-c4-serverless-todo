/**
 * Handle all logic for todos here.
 */

// Import todoAccess class which has logic for todos.
import { TodosAccess } from '../dataLayer/todosAcess'

// Import todoItem table interface model for type-safety.
import { TodoItem } from '../models/TodoItem'

// Import todoItem request interface for type-safety.
import { CreateTodoRequest } from '../requests/CreateTodoRequest'

import * as uuid from 'uuid'

// Create a new class instance/ object of todoAccess.
const todoAccess = new TodosAccess()


export async function createTodo(CreateTodoRequest: CreateTodoRequest, userId: string): Promise<TodoItem> {
  const itemId = uuid.v4()
  return await todoAccess.createTodo({
    todoId: itemId,
    userId: userId,
    createdAt: new Date().toISOString(),
    done: false,
    ...CreateTodoRequest
  })
}
