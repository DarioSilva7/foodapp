import { SetMetadata } from '@nestjs/common';
import { UserTypeEnum } from '../enums/user.type.enum';

export const USER_TYPE_KEY = 'userType';
export const UserType = (...type: UserTypeEnum[]) =>
  SetMetadata(USER_TYPE_KEY, type);
