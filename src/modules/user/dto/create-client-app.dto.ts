import { IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { CreateInvoiceDataDto } from '../../company/dto/create-invoice-data.dto';

export class CreateClientAppDto extends CreateUserDto {
  @IsString()
  companyName: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateInvoiceDataDto)
  invoiceData: CreateInvoiceDataDto;
}
