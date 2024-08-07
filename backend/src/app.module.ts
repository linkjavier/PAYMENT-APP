import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { ProductController } from './product/product.controller';
import { TransactionController } from './transaction/transaction.controller';

@Module({
  imports: [ProductModule, TransactionModule],
  controllers: [ProductController, TransactionController],
  providers: [],
})
export class AppModule {}