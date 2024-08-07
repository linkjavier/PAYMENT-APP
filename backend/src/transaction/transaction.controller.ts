// transaction.controller.ts
import { Controller, Post, Put, Body, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import axios from 'axios';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() transaction: any) {
    return this.transactionService.createTransaction(transaction);
  }

  @Put(':id')
  async updateTransaction(@Param('id') id: string, @Body('status') status: string) {
    return this.transactionService.updateTransaction(id, status);
  }
}

//Wompi Section
@Controller('payments')
export class PaymentController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post('create')
  async createPayment(@Body() paymentData: { cardNumber: string; deliveryAddress: string }) {
    const response = await axios.post('https://api.wompi.co/v1/transactions', paymentData, {
      headers: {
        Authorization: `Bearer ${process.env.WOMPI_API_KEY}`,
      },
    });
    return response.data;
  }
}