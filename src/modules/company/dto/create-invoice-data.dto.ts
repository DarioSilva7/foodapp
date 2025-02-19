import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInvoiceDataDto {
  @IsString()
  @IsNotEmpty()
  razonSocial: string;

  @IsString()
  @IsNotEmpty()
  cuit: string;

  @IsString()
  @IsNotEmpty()
  direccionFiscal: string;

  @IsString()
  @IsNotEmpty()
  condicionIVA: string;
}
