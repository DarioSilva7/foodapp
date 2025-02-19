// import { Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsNotEmpty,
  // ValidateNested,
} from 'class-validator';
// import { CreateAuthDto } from 'src/modules/auth/dto/create-auth.dto';

export class CreateBaseUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('AR')
  phoneNumber?: string;
}
