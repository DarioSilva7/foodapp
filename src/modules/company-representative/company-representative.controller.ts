import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CompanyRepresentativeService } from './company-representative.service';
import { CreateCompanyRepresentativeDto } from '../user/dto/create-company-representative.dto';
import { UpdateCompanyRepresentativeDto } from './dto/update-company-representative.dto';

@Controller('company-representative')
export class CompanyRepresentativeController {
  constructor(
    private readonly companyRepresentativeService: CompanyRepresentativeService,
  ) {}

  @Post('register')
  create(
    @Body() createCompanyRepresentativeDto: CreateCompanyRepresentativeDto,
  ) {
    return this.companyRepresentativeService.register(
      createCompanyRepresentativeDto,
    );
  }

  @Get()
  findAll() {
    return this.companyRepresentativeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyRepresentativeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyRepresentativeDto: UpdateCompanyRepresentativeDto,
  ) {
    return this.companyRepresentativeService.update(
      +id,
      updateCompanyRepresentativeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyRepresentativeService.remove(+id);
  }
}
