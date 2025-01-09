import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Auth } from './auth.entity';
import { Role } from './role.entity';

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

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @OneToOne(() => Auth, (auth) => auth.baseUser, { cascade: true })
  @JoinColumn()
  auth: Auth;

  @ManyToMany(() => Role)
  @JoinTable({})
  roles: Role[];
}
