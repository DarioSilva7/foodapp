// src/database/database.controller.ts
import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { DatabaseService } from './database.service';
// import { ThrottlerRolesGuard } from '../auth/guards/throttler-roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('database')
// @UseGuards(JwtAuthGuard, ThrottlerRolesGuard)
@UseGuards(JwtAuthGuard, RolesGuard)
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('migrate')
  @Roles('admin')
  @Throttle({ options: { limit: 3, ttl: 1000 } }) // 3 llamadas por segundo
  async runMigrations() {
    const migrations = await this.databaseService.runMigrations();
    return { message: 'Migrations executed successfully', migrations };
  }

  @Post('revert')
  @Roles('admin')
  @Throttle({ options: { limit: 3, ttl: 1000 } }) // 3 llamadas por segundo
  async revertLastMigration() {
    const migration = await this.databaseService.revertLastMigration();
    return { message: 'Last migration reverted successfully', migration };
  }

  @Get('status')
  @Roles('admin')
  @Throttle({ options: { limit: 20, ttl: 10000 } }) // 5 llamadas por 10 segundos
  async getDatabaseStatus() {
    const connection = await this.databaseService.getConnection();
    return {
      isConnected: connection.isInitialized,
      migrations: await connection.showMigrations(),
    };
  }
}
