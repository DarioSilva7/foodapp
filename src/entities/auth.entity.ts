import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { BaseUser } from './baseUser.entity';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  password: string;

  @Column({ name: 'refresh_token', nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  OTP: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @OneToOne(() => BaseUser, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  baseUser: BaseUser;
}
