import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { CreateCompanyRepresentativeDto } from '../user/dto/create-company-representative.dto';
import { UpdateCompanyRepresentativeDto } from './dto/update-company-representative.dto';
import { CompanyRepresentativeRepository } from 'src/repositories';

@Injectable()
export class CompanyRepresentativeService {
  constructor(
    private readonly companyRepresentativeRepository: CompanyRepresentativeRepository,
  ) {}
  async register(
    createCompanyRepresentativeDto: CreateCompanyRepresentativeDto,
  ) {
    console.log(
      '🚀 ~ CompanyRepresentativeService ~ createCompanyRepresentativeDto:',
      createCompanyRepresentativeDto,
    );
    // try {
    //   const companyRepresentativeCreated =
    //     this.companyRepresentativeRepository.create(
    //       createCompanyRepresentativeDto,
    //     );
    //   return this.companyRepresentativeRepository.save(
    //     companyRepresentativeCreated,
    //   );
    // } catch (error) {
    //   throw new ServiceUnavailableException(
    //     `Error al registrar el representante de la empresa ${error.message}`,
    //   );
    // }
  }

  findAll() {
    return `This action returns all companyRepresentative`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyRepresentative`;
  }

  update(
    id: number,
    updateCompanyRepresentativeDto: UpdateCompanyRepresentativeDto,
  ) {
    console.log(
      '🚀 ~ CompanyRepresentativeService ~ updateCompanyRepresentativeDto:',
      updateCompanyRepresentativeDto,
    );
    return `This action updates a #${id} companyRepresentative`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyRepresentative`;
  }
}
