import { PartialType } from '@nestjs/swagger';

import { CreateCompanyRepresentativeDto } from '../../user/dto/create-company-representative.dto';

export class UpdateCompanyRepresentativeDto extends PartialType(
  CreateCompanyRepresentativeDto,
) {}
