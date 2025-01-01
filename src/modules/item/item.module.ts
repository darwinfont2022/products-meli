import { Module } from '@nestjs/common';
import { ItemController } from './presentation/controller/item.controller';
import { ItemRepository } from './domain/repository/item.repository';
import { AttributeRepository } from './domain/repository/attribute.repository';
import { CombinationRepository } from './domain/repository/combination.repository';
import { ItemEntity } from './domain/entity/item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from './application/applicatio.module';
import { DomainModule } from './domain/domain.module';
import { PriceController } from './presentation/controller/price.controller';
import { StockController } from './presentation/controller/stock.controller';

@Module({
    imports: [
        // TypeOrmModule.forFeature([ItemEntity]),
        ApplicationModule,
        // DomainModule
    ],
    controllers: [ItemController, PriceController, StockController],
    providers: [
        AttributeRepository,
        CombinationRepository,
    ],
})
export class ItemModule { }
