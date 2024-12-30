// src/database/database.service.ts
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async runMigrations() {
    const migrations = await this.dataSource.runMigrations();
    return migrations;
  }

  async revertLastMigration() {
    const migration = await this.dataSource.undoLastMigration();
    return migration;
  }

  async getConnection() {
    return this.dataSource;
  }
}
