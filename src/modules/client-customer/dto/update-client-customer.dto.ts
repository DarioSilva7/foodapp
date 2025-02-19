import { PartialType } from '@nestjs/swagger';
import { CreateClientCustomerDto } from '../../user/dto/create-client-customer.dto';

export class UpdateClientCustomerDto extends PartialType(
  CreateClientCustomerDto,
) {}
