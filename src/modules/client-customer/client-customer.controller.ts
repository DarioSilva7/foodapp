import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientCustomerService } from './client-customer.service';
import { CreateClientCustomerDto } from '../user/dto/create-client-customer.dto';
import { UpdateClientCustomerDto } from './dto/update-client-customer.dto';

@Controller('client-customer')
export class ClientCustomerController {
  constructor(private readonly clientCustomerService: ClientCustomerService) {}

  @Post()
  create(@Body() createClientCustomerDto: CreateClientCustomerDto) {
    return this.clientCustomerService.register(createClientCustomerDto);
  }

  @Get()
  findAll() {
    return this.clientCustomerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientCustomerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientCustomerDto: UpdateClientCustomerDto,
  ) {
    return this.clientCustomerService.update(+id, updateClientCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientCustomerService.remove(+id);
  }
}
