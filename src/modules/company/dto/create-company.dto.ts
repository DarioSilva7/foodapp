import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { CreateInvoiceDataDto } from './create-invoice-data.dto';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @ValidateNested()
  @Type(() => CreateInvoiceDataDto)
  datosFacturacion: CreateInvoiceDataDto;
}
