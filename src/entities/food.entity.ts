// src/viandas/entities/food.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('simple-array')
  dietaryRestrictions: string[];

  @ManyToMany(() => Pedido, (pedido) => pedido.viandas)
  pedidos: Pedido[];
}
