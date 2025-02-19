import {
  // ConflictException,
  Injectable,
  // InternalServerErrorException,
  Logger,
  // ServiceUnavailableException,
} from '@nestjs/common';
// import * as bcryptjs from 'bcryptjs';

import { UpdateClientAppDto } from './dto/update-client-app.dto';
import {
  InvoiceDataRepository,
  AuthRepository,
  ClientAppRepository,
} from '../../repositories/index';
// import { Auth, ClientApp, InvoiceData, BaseUser } from '../../entities/index';
// import { generateSecureOTP } from 'src/utils/OTP';
import { DataSource } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateClientAppDto } from '../user/dto';
// import { UserTypeEnum } from 'src/auth/enums/role.enum';

@Injectable()
export class ClientAppService {
  private readonly logger = new Logger(ClientAppService.name);
  constructor(
    private readonly clientAppRepository: ClientAppRepository,
    private readonly invoiceDataRepository: InvoiceDataRepository,
    private readonly authRepository: AuthRepository,
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  // async register(createClientAppDto: CreateClientAppDto) {
  //   return this.dataSource.transaction(async (manager) => {
  //     try {
  //       const { invoiceData, password, ...clientAppData } = createClientAppDto;

  //       // Crear y guardar InvoiceData
  //       const invoiceDataCreated = manager.create(InvoiceData, invoiceData);
  //       await manager.save(invoiceDataCreated);

  //       // Crear ClientApp
  //       const clientApp = manager.create(ClientApp, {
  //         ...clientAppData,
  //         invoiceData: invoiceDataCreated,
  //       });

  //       // Guardar ClientApp
  //       const savedClientApp = await manager.save(clientApp);
  //       console.log(
  //         '🚀 ~ ClientAppService ~ returnthis.dataSource.transaction ~ savedClientApp:',
  //         savedClientApp,
  //       );

  //       // Crear y guardar Auth
  //       const hashedPassword = await bcryptjs.hash(password, 10);
  //       const auth = manager.create(Auth, {
  //         password: hashedPassword,
  //         OTP: generateSecureOTP(),
  //         user: savedClientApp,
  //       });
  //       console.log(
  //         '🚀 ~ ClientAppService ~ returnthis.dataSource.transaction ~ auth:',
  //         auth,
  //       );
  //       await manager.save(auth);

  //       // Retornar el ClientApp guardado sin la información sensible
  //       const { auth: _, ...clientAppToReturn } = savedClientApp;
  //       console.log(
  //         '🚀 ~ ClientAppService ~ returnthis.dataSource.transaction ~ _:',
  //         _,
  //       );
  //       return clientAppToReturn;
  //     } catch (error) {
  //       throw new ServiceUnavailableException(
  //         `Error during registration: ${error.message}`,
  //       );
  //     }
  //   });
  // }
  /**
   * Registers a new ClientApp user with associated InvoiceData and Auth.
   *
   * @param createClientAppDto - The DTO containing the client app data
   * @returns The created ClientApp entity (without sensitive information)
   * @throws ConflictException if a user with the same email already exists
   * @throws InternalServerErrorException for any other errors during the process
   */
  async register(createClientAppDto: CreateClientAppDto) {
    console.log(
      '🚀 ~ ClientAppService ~ register ~ createClientAppDto:',
      createClientAppDto,
    );
    return createClientAppDto;
  }
  // async register(
  //   createClientAppDto: CreateClientAppDto,
  // ): Promise<Partial<ClientApp>> {
  //   this.logger.log(
  //     `Attempting to register new ClientApp: ${createClientAppDto.email}`,
  //   );
  //   return this.dataSource.transaction(async (manager) => {
  //     try {
  //       const { invoiceData, password, ...clientAppData } = createClientAppDto;

  //       const existingUser = await manager.findOne(BaseUser, {
  //         where: { email: clientAppData.email },
  //       });
  //       if (existingUser) {
  //         throw new ConflictException('Ya existe un usuario con ese correo');
  //       }

  //       const invoiceDataEntity = manager.create(InvoiceData, invoiceData);
  //       const savedInvoiceData = await manager.save(invoiceDataEntity);
  //       this.logger.debug(`InvoiceData created for ${clientAppData.email}`);

  //       const clientApp = manager.create(ClientApp, {
  //         ...clientAppData,
  //         invoiceData: savedInvoiceData,
  //         type: 'client_app',
  //         role: UserTypeEnum.USER_CLIENT,
  //       });

  //       const savedClientApp = await manager.save(clientApp);
  //       this.logger.debug(`ClientApp saved: ${savedClientApp.id}`);

  //       const hashedPassword = await bcryptjs.hash(password, 10);
  //       const auth = manager.create(Auth, {
  //         password: hashedPassword,
  //         OTP: generateSecureOTP(),
  //         user: savedClientApp,
  //       });
  //       await manager.save(auth);
  //       this.logger.debug(`Auth created for ClientApp: ${savedClientApp.id}`);

  //       const { ...clientAppToReturn } = savedClientApp;
  //       this.logger.log(
  //         `Successfully registered new ClientApp: ${savedClientApp.id}`,
  //       );
  //       return clientAppToReturn;
  //     } catch (error) {
  //       this.logger.error(
  //         `Error during ClientApp registration: ${error.message}`,
  //         error.stack,
  //       );
  //       if (error instanceof ConflictException) {
  //         throw error;
  //       }
  //       throw new InternalServerErrorException(
  //         'An error occurred during registration',
  //       );
  //       // throw new ServiceUnavailableException(
  //       //   `Error during registration: ${error.message}`,
  //       // );
  //     }
  //   });
  // }

  findAll() {
    return `This action returns all clientApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientApp`;
  }

  update(id: number, updateClientAppDto: UpdateClientAppDto) {
    console.log(
      '🚀 ~ ClientAppService ~ update ~ updateClientAppDto:',
      updateClientAppDto,
    );
    return `This action updates a #${id} clientApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientApp`;
  }
}
