// transaction.module.ts
import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { DynamoDBService } from '../dynamoDB.service';

@Module({
  providers: [TransactionService, DynamoDBService],
  exports: [TransactionService],
})
export class TransactionModule {}