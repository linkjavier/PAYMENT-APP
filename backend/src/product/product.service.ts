// product.service.ts
import { Injectable } from '@nestjs/common';
import { DynamoDBService } from '../dynamoDB.service';

@Injectable()
export class ProductService {
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  async getProducts() {
    return this.dynamoDBService.getProducts();
  }
}