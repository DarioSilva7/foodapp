import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Public } from 'src/auth/decorators/public.decorator';

import { UserTypeEnum } from '../../auth/enums/user.type.enum';
import {
  CreateClientAppDto,
  CreateClientCustomerDto,
  CreateCompanyRepresentativeDto,
  CreateEmployeeDto,
} from '../user/dto/index';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @Post('register/client-app')
  async registerClienteApp(@Body() createClientAppDto: CreateClientAppDto) {
    const { baseUser, ...rest } = createClientAppDto;
    return this.authService.registerUserFactory(
      baseUser,
      rest,
      UserTypeEnum.USER_CLIENT,
    );
  }

  @Public()
  @Post('register/client-customer')
  async registerClienteCustomer(
    @Body() createClientCustomerDto: CreateClientCustomerDto,
  ) {
    const { baseUser, ...rest } = createClientCustomerDto;
    return this.authService.registerUserFactory(
      baseUser,
      rest,
      UserTypeEnum.USER_CUSTOMER,
    );
  }

  @Public()
  @Post('register/company-representative')
  async registerEmpresaRepresentante(
    @Body() createEmpresaRepresentanteDto: CreateCompanyRepresentativeDto,
  ) {
    const { baseUser, ...rest } = createEmpresaRepresentanteDto;
    return this.authService.registerUserFactory(
      baseUser,
      rest,
      UserTypeEnum.USER_REPRESENTATIVE,
    );
  }

  @Public()
  @Post('register/employee')
  async registerEmpleado(@Body() createEmpleadoDto: CreateEmployeeDto) {
    console.log('🚀 ~ AuthController ~ createEmpleadoDto:', createEmpleadoDto);
    const { baseUser, ...rest } = createEmpleadoDto;
    return this.authService.registerUserFactory(
      baseUser,
      rest,
      UserTypeEnum.EMPLOYEE,
    );
  }
}
