import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';
import { Auth } from './auth.entity';
import { UserTypeEnum } from 'src/auth/enums/user.type.enum';

@Entity({ name: 'base_user' })
export class BaseUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'phone_number', nullable: true })
  phoneNumber: string;

  @Column({ type: 'enum', enum: UserTypeEnum, nullable: true })
  userType: UserTypeEnum;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @OneToOne(() => Auth, (auth) => auth.baseUser)
  auth: Auth;
}
