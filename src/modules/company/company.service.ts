import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company, InvoiceData } from 'src/entities';
import { DataSource, Repository } from 'typeorm';

import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(InvoiceData)
    private readonly invoiceDataRepository: Repository<InvoiceData>,
    private dataSource: DataSource,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const alreadyExists = await this.companyRepository.findOneBy({
        name: createCompanyDto.name,
      });
      if (alreadyExists)
        throw new ConflictException('Company name already in use');
      const { datosFacturacion, ...rest } = createCompanyDto;
      const newInvoiceData =
        this.invoiceDataRepository.create(datosFacturacion);
      await queryRunner.manager.save(newInvoiceData);

      const newCompany = this.companyRepository.create({
        invoiceData: newInvoiceData,
        ...rest,
      });

      await queryRunner.manager.save(newCompany);
      await queryRunner.commitTransaction();
      return { companyId: newCompany.id };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    console.log(
      '🚀 ~ CompanyService ~ update ~ updateCompanyDto:',
      updateCompanyDto,
    );
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
