import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreateInvoiceDataDto } from '../../company/dto/create-invoice-data.dto';

import { CreateBaseUserDto } from './create-base-user.dto';

export class CreateClientCustomerDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  @ValidateNested()
  @Type(() => CreateBaseUserDto)
  baseUser: CreateBaseUserDto;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateInvoiceDataDto)
  invoiceData: CreateInvoiceDataDto;
}
