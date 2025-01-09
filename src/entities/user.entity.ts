import { Entity, OneToOne, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Auth } from './index';

@Entity()
export class User {
  @Column({ unique: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  phoneNumber: string;

  @Column({ default: 'user' })
  role: string;

  @OneToOne(() => Auth, (auth) => auth.baseUser)
  auth: Auth;
}
