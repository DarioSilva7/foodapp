import { UserTypeEnum } from 'src/auth/enums/user.type.enum';

export class ValidateUserDto {
  id: string;
  email: string;
  userType: UserTypeEnum;
}
