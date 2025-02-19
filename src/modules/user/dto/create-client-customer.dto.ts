import {
  IsNotEmpty,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBaseUserDto } from './create-base-user.dto';
import { CreateInvoiceDataDto } from '../../company/dto/create-invoice-data.dto';

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
