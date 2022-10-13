/**
 * Class to encapsulate (methods and attributes) logic for todos table.
 */
import * as AWS from 'aws-sdk'

import { DocumentClient } from 'aws-sdk/clients/dynamodb'

import { TodoItem } from '../models/TodoItem'


export class TodosAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly TodosTable = process.env.TODOS_TABLE,
    private readonly TodosIndex = process.env.TODOS_CREATED_AT_INDEX
  ) { }

  async createTodo(todo: TodoItem): Promise<TodoItem> {
    console.log("Creating todo item")

    await this.docClient.put({
      TableName: this.TodosTable,
      Item: todo
    }).promise()

    return todo
  }
}
