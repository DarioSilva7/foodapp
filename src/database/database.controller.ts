import { Controller, Post, Get, UseGuards } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';

// import { ThrottlerRolesGuard } from '../auth/guards/throttler-roles.guard';
import { UserType } from '../auth/decorators/usertype.decorator';
import { UserTypeEnum } from '../auth/enums/user.type.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

import { DatabaseService } from './database.service';

@Controller('database')
// @UseGuards(JwtAuthGuard, ThrottlerRolesGuard)
@UseGuards(JwtAuthGuard, RolesGuard)
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('migrate')
  @UserType(UserTypeEnum.ADMIN)
  @Throttle({ options: { limit: 3, ttl: 1000 } }) // 3 llamadas por segundo
  async runMigrations() {
    const migrations = await this.databaseService.runMigrations();
    return { message: 'Migrations executed successfully', migrations };
  }

  @Post('revert')
  @UserType(UserTypeEnum.ADMIN)
  @Throttle({ options: { limit: 3, ttl: 1000 } }) // 3 llamadas por segundo
  async revertLastMigration() {
    const migration = await this.databaseService.revertLastMigration();
    return { message: 'Last migration reverted successfully', migration };
  }

  @Get('status')
  @UserType(UserTypeEnum.ADMIN)
  @Throttle({ options: { limit: 20, ttl: 10000 } }) // 5 llamadas por 10 segundos
  async getDatabaseStatus() {
    const connection = await this.databaseService.getConnection();
    return {
      isConnected: connection.isInitialized,
      migrations: await connection.showMigrations(),
    };
  }
}
