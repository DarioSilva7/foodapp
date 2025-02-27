import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserType } from 'src/auth/decorators/usertype.decorator';
import { UserTypeEnum } from 'src/auth/enums/user.type.enum';
import { UserTypeGuard } from 'src/auth/guards/user-type.guard';

import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@UseGuards(UserTypeGuard)
@UserType(UserTypeEnum.ADMIN)
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UserType(UserTypeEnum.ADMIN)
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  @UserType(UserTypeEnum.ADMIN)
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  @UserType(UserTypeEnum.ADMIN, UserTypeEnum.USER_REPRESENTATIVE)
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  @UserType(UserTypeEnum.ADMIN, UserTypeEnum.USER_REPRESENTATIVE)
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  @UserType(UserTypeEnum.ADMIN)
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}
