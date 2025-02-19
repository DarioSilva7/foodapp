// import {
//   Column,
//   Entity,
//   JoinTable,
//   ManyToMany,
//   PrimaryGeneratedColumn,
// } from 'typeorm';
// import { Permission } from './permission.entity';
// import { UserTypeEnum } from 'src/auth/enums/role.enum';

// @Entity()
// export class Role {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @Column({ type: 'enum', enum: UserTypeEnum, default: UserTypeEnum.USER })
//   name: UserTypeEnum;

//   @ManyToMany(() => Permission)
//   @JoinTable()
//   permissions: Permission[];
// }
