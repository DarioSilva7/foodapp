import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Ejemplo: "admin", "client", "representative"

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
