import { IsString } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';

export class CreateEmpresaRepresentanteDto extends CreateBaseUserDto {
  @IsString()
  empresaId: string;
}
