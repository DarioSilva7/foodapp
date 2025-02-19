import { SetMetadata } from '@nestjs/common';
import { UserTypeEnum } from '../enums/user.type.enum';

export const UserType = (type: UserTypeEnum) => SetMetadata('userType', type);
