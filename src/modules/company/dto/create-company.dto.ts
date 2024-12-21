import { Type } from 'class-transformer';
import { IsObject, IsString, ValidateNested } from 'class-validator';
import { CreateInvoiceDataDto } from './create-invoice-data.dto';

export class CreateCompanyDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateInvoiceDataDto)
  datosFacturacion: CreateInvoiceDataDto;
}
