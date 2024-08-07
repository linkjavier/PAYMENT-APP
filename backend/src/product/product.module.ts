// product.module.ts
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { DynamoDBService } from '../dynamoDB.service';

@Module({
  providers: [ProductService, DynamoDBService],
  exports: [ProductService],
})
export class ProductModule {}


