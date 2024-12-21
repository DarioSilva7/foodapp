import { Entity, ManyToOne } from 'typeorm';
import { Company } from './index';
import { User } from './user.entity';

@Entity()
export class CompanyRepresentative extends User {
  @ManyToOne(() => Company, (company) => company.representantes)
  company: Company;

  constructor() {
    super();
    this.role = 'company_representative';
  }
}
