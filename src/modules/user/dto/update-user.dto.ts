import { PartialType } from '@nestjs/mapped-types';

import { CreateBaseUserDto } from './create-base-user.dto';

export class UpdateUserDto extends PartialType(CreateBaseUserDto) {}
