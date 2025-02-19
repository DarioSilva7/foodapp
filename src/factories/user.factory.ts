// import { Injectable } from '@nestjs/common';
// import { ClientAppRepository } from '../repositories/clientApp.repository';
// import { CompanyRepresentativeRepository } from '../repositories/companyRepresentative.repository';
// import { EmployeeRepository } from '../repositories/employee.repository';

// import { User } from '../entities/user.entity';
// import { UserTypeEnum } from 'src/auth/enums/role.enum';

// @Injectable()
// export class UserFactory {
//   constructor(
//     private clientAppRepository: ClientAppRepository,
//     private companyRepresentativeRepository: CompanyRepresentativeRepository,
//     private employeeRepository: EmployeeRepository,
//     private userRepository: UserRepository,
//   ) {}

//   async createUser(createUserDto: CreateUserDto): Promise<User> {
//     let userCreated: User;
//     switch (createUserDto.role) {
//       case UserTypeEnum.USER_CLIENT:
//         userCreated = this.clientAppRepository.create(createUserDto);
//         return this.clientAppRepository.save(userCreated);
//       case UserTypeEnum.USER_REPRESENTATIVE:
//         userCreated =
//           this.companyRepresentativeRepository.create(createUserDto);

//         return this.companyRepresentativeRepository.save(userCreated);
//       case UserTypeEnum.EMPLOYEE:
//         userCreated = this.employeeRepository.create(createUserDto);
//         return this.employeeRepository.save(userCreated);
//       default:
//         userCreated = this.userRepository.create(createUserDto);
//         return this.userRepository.save(userCreated);
//     }
//   }
// }
