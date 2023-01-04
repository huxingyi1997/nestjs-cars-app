import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectConfig } from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(connectConfig)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: DataSource) {
    if (connection.isInitialized) {
      console.log('DB Connected Successfully!');
    }
  }
}
