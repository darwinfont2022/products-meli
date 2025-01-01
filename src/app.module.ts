import { ConfigurationService } from './config/configuratio.service';
import { ItemModule } from './modules/item/item.module';
import { Module } from '@nestjs/common';
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
  providers: [
    ConfigurationService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
  }
}
