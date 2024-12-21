import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateEmpleadoDto extends CreateUserDto {
  @IsString()
  cuil: string;

  @IsString()
  empresaId: string;
}
