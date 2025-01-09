import { IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateBaseUserDto } from './create-base-user.dto';
import { CreateInvoiceDataDto } from '../../company/dto/create-invoice-data.dto';

export class CreateClientAppDto extends CreateBaseUserDto {
  @IsString()
  companyName: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateInvoiceDataDto)
  invoiceData: CreateInvoiceDataDto;
}
