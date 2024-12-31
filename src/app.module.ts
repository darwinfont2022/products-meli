import { ConfigurationService } from './config/configuratio.service';
import { ItemModule } from './modules/item/item.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { configuration } from "./config/configuratio.service"
@Module({
  imports: [
    ItemModule,
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRoot(ConfigurationService.getDataSource()),
  ],
  controllers: [AppController],
  providers: [
    ConfigurationService,
    AppService
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
