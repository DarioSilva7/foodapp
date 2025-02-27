import { PartialType } from '@nestjs/swagger';

import { CreateEmployeeDto } from '../../user/dto/create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
