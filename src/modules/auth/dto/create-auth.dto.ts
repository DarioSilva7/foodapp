import { IsOptional, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  refreshToken?: string;

  @IsOptional()
  @IsString()
  OTP?: string;

  @IsOptional()
  isActive?: boolean;
}
