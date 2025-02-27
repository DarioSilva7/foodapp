import { Type } from 'class-transformer';
import { IsString, IsDate, IsUrl } from 'class-validator';

export class CreatePaymentReceiptDto {
  @IsString()
  numeroTransaccion: string;

  @IsDate()
  @Type(() => Date)
  fechaPago: Date;

  @IsString()
  metodoPago: string;

  @IsUrl()
  archivoUrl: string;
}
