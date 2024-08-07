import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class DynamoDBService {
  private readonly dynamoDB = new AWS.DynamoDB.DocumentClient();

  async getProducts() {
    const params = {
      TableName: 'Products',
    };
    const result = await this.dynamoDB.scan(params).promise();
    return result.Items;
  }

  async createTransaction(transaction: any) {
    const params = {
      TableName: 'Transactions',
      Item: transaction,
    };
    await this.dynamoDB.put(params).promise();
  }

  async updateTransaction(transactionId: string, update: any) {
    const params = {
      TableName: 'Transactions',
      Key: { id: transactionId },
      UpdateExpression: 'set #status = :status',
      ExpressionAttributeNames: { '#status': 'status' },
      ExpressionAttributeValues: { ':status': update.status },
    };
    await this.dynamoDB.update(params).promise();
  }

  async updateStock(productId: string, quantity: number) {
    const params = {
      TableName: 'Products',
      Key: { id: productId },
      UpdateExpression: 'set stock = stock - :quantity',
      ExpressionAttributeValues: { ':quantity': quantity },
    };
    await this.dynamoDB.update(params).promise();
  }
}
