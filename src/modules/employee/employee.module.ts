import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../../entities/index';
import { EmployeeRepository } from 'src/repositories';

@Module({
  controllers: [EmployeeController],
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
