import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    console.log(
      '🚀 ~ InvoiceController ~ create ~ createInvoiceDto:',
      createInvoiceDto,
    );
    return 'this.invoiceService.create(createInvoiceDto)';
  }

  @Get()
  findAll() {
    return 'this.invoiceService.findAll()';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('🚀 ~ InvoiceController ~ findOne ~ id:', id);
    return 'this.invoiceService.findOne(+id)';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    console.log(
      '🚀 ~ InvoiceController ~ update ~ updateInvoiceDto:',
      updateInvoiceDto,
    );
    console.log('🚀 ~ InvoiceController ~ update ~ id:', id);
    return 'this.invoiceService.update(+id, updateInvoiceDto)';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log('🚀 ~ InvoiceController ~ remove ~ id:', id);
    return 'this.invoiceService.remove(+id)';
  }
}
