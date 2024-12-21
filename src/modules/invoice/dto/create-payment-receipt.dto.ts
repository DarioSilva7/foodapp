import { IsString, IsDate, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

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
