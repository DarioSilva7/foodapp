import { IsString } from 'class-validator';

export class CreateInvoiceDataDto {
  @IsString()
  razonSocial: string;

  @IsString()
  cuit: string;

  @IsString()
  direccionFiscal: string;

  @IsString()
  condicionIVA: string;
}
