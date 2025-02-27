import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateBaseUserDto } from 'src/modules/user/dto';

export class CreateEmployeeDto {
  @ValidateNested()
  @Type(() => CreateBaseUserDto)
  baseUser: CreateBaseUserDto;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cuil: string;

  @IsString()
  @IsNotEmpty()
  empresaId: string;
}
