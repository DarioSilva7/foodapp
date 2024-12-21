import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateEmpresaRepresentanteDto extends CreateUserDto {
  @IsString()
  empresaId: string;
}
