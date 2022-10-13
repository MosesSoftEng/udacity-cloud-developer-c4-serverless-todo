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
		) {
	}

	async getTodosForUser(userId): Promise<TodoItem[]> {
		let result = await this.docClient.query({
			TableName: this.TodosTable,
			IndexName: this.TodosIndex,
			KeyConditionExpression: 'userId = :userId',
			ExpressionAttributeValues: {
				':userId': userId
			}
		}).promise()

		const items = result.Items
		return items as TodoItem[]
	}
}
