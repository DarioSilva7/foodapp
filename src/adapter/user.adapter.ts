// import { Injectable } from '@nestjs/common';
// import { CreateClientAppDto, CreateUserDto } from '../modules/user/dto';
// import { UserTypeEnum } from 'src/auth/enums/role.enum';

// @Injectable()
// export class UserAdapter {
//   async adaptClientData<T extends CreateUserDto>(
//     dto: T,
//     role: UserTypeEnum,
//   ): Promise<any> {
//     const { email, firstName, lastName, password, phoneNumber, ...rest } = dto;
//     if (dto instanceof CreateClientAppDto) {
//       const { companyName, invoiceData } = dto;
//       return {
//         email,
//         firstName,
//         lastName,
//         password,
//         phoneNumber,
//         role,
//         companyName,
//         invoiceData,
//       };
//     }

//     return {
//       email,
//       firstName,
//       lastName,
//       password,
//       phoneNumber,
//       role,
//       extraData: rest,
//     };
//   }
// }
