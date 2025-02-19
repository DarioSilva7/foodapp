import { UserTypeEnum } from '../../../auth/enums/user.type.enum';

export class loginDto {
  email: string;
  id: string;
  userType: UserTypeEnum;
}
