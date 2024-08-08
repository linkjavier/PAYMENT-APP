import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { ProductController } from './product/product.controller';
import { TransactionController } from './transaction/transaction.controller';
import { DynamoDB } from 'aws-sdk';

@Module({
  imports: [ProductModule, TransactionModule],
  controllers: [ProductController, TransactionController],
  providers: [
    {
      provide: 'DYNAMODB',
      useFactory: () => {
        return new DynamoDB.DocumentClient({
          region: process.env.AWS_REGION,
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
      },
    },
  ],
})
export class AppModule {}