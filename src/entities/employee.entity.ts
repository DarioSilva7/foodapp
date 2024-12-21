// src/empleados/entities/empleado.entity.ts
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Company } from './company.entity';
import { Pedido } from './pedido.entity';

@Entity()
export class Employee extends User {
  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @OneToMany(() => Pedido, (pedido) => pedido.employee)
  pedidos: Pedido[];
}
