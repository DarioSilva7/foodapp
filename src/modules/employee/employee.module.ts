import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from 'src/repositories';

import { Employee } from '../../entities/index';

import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  controllers: [EmployeeController],
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
