import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DynamoDBService {
  private readonly dynamoDB = new AWS.DynamoDB.DocumentClient();


  constructor() {
    AWS.config.update({
      region: 'us-east-1', 
    });

    this.dynamoDB = new AWS.DynamoDB.DocumentClient();
  }

  async getProducts() {
    const params = {
      TableName: 'products',
    };
    const result = await this.dynamoDB.scan(params).promise();
    return result.Items;
  }

  async createTransaction(transaction: any) {
    // Generar un UUID para el id
    const transactionId = uuidv4();

    // Agregar el id al objeto transaction
    const transactionWithId = {
      id: transactionId,
      ...transaction, // Mantener los datos existentes en transaction
      status: 'PENDING', // Estado inicial
      createdAt: new Date().toISOString(), // Añadir fecha de creación
    };

    const params = {
      TableName: 'transactions',
      Item: transactionWithId,
    };

    try {
      await this.dynamoDB.put(params).promise();
      return { transactionId }; // Devolver el id de la transacción
    } catch (error) {
      throw new Error(`Error creating transaction: ${error.message}`);
    }
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
