import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {
  CreateClientAppDto,
  CreateEmpleadoDto,
  CreateEmpresaRepresentanteDto,
  CreateBaseUserDto,
} from '../user/dto/index';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register/client-app')
  async registerClienteApp(@Body() createClientAppDto: CreateClientAppDto) {
    return this.authService.register({
      ...createClientAppDto,
      role: 'client_app',
    });
  }

  @Post('register/client-customer')
  async registerClienteCustomer(@Body() createClientAppDto: CreateBaseUserDto) {
    return this.authService.register({
      ...createClientAppDto,
      role: 'client_customer',
    });
  }

  @Post('register/company-representative')
  async registerEmpresaRepresentante(
    @Body() createEmpresaRepresentanteDto: CreateEmpresaRepresentanteDto,
  ) {
    return this.authService.register({
      ...createEmpresaRepresentanteDto,
      role: 'company_representative',
    });
  }

  @Post('register/employee')
  async registerEmpleado(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.authService.register({
      ...createEmpleadoDto,
      role: 'employee',
    });
  }
}
