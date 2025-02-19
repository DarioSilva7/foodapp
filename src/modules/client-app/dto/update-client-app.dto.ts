import { PartialType } from '@nestjs/swagger';
import { CreateClientAppDto } from '../../user/dto/create-client-app.dto';

export class UpdateClientAppDto extends PartialType(CreateClientAppDto) {}
