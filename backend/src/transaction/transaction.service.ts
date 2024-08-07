// transaction.service.ts
import { Injectable } from '@nestjs/common';
import { DynamoDBService } from '../dynamoDB.service';

@Injectable()
export class TransactionService {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  async createTransaction(transaction: any) {
    return this.dynamoDBService.createTransaction(transaction);
  }

  async updateTransaction(transactionId: string, status: string) {
    return this.dynamoDBService.updateTransaction(transactionId, { status });
  }

  async updateStock(productId: string, quantity: number) {
    return this.dynamoDBService.updateStock(productId, quantity);
  }
}