import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './index';
import { BaseUser } from './baseUser.entity';
@Entity()
export class CompanyRepresentative {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Company, (company) => company.representatives, {
    onDelete: 'CASCADE',
  })
  company: Company;

  @OneToOne(() => BaseUser, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_base_user' })
  baseUser: BaseUser;
}
