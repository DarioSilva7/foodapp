import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientAppService } from './client-app.service';
import { UpdateClientAppDto } from './dto/update-client-app.dto';
import { CreateClientAppDto } from '../user/dto';

@Controller('client-app')
export class ClientAppController {
  constructor(private readonly clientAppService: ClientAppService) {}

  @Post('register')
  create(@Body() createClientAppDto: CreateClientAppDto) {
    return this.clientAppService.register(createClientAppDto);
  }

  @Get()
  findAll() {
    return this.clientAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientAppService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientAppDto: UpdateClientAppDto,
  ) {
    return this.clientAppService.update(+id, updateClientAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientAppService.remove(+id);
  }
}
