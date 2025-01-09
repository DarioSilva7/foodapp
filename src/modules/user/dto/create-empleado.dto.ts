import { IsString } from 'class-validator';
import { CreateBaseUserDto } from './create-base-user.dto';

export class CreateEmpleadoDto extends CreateBaseUserDto {
  @IsString()
  cuil: string;

  @IsString()
  empresaId: string;
}
