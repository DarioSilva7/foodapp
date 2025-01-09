import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateBaseUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  role: string;

  auth: any;
}
