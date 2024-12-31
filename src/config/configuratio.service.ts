import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { IConfiguration } from './config';
import { ItemEntity } from 'src/modules/item/domain/entity/item.entity';
import { AddresItemEntity } from 'src/modules/item/domain/entity/addres-item.entity';
import { AttributeEntity } from 'src/modules/item/domain/entity/attribute.entity';
import { CatalogEntity } from 'src/modules/item/domain/entity/catalog.entity';
import { CombinationEntity } from 'src/modules/item/domain/entity/combination.entity';
import { DescriptionEntity } from 'src/modules/item/domain/entity/description.entity';
import { FreeMethodRuleEntity } from 'src/modules/item/domain/entity/free-method-rule.entity';
import { FreeMethodEntity } from 'src/modules/item/domain/entity/free-method.entity';
import { ListingEntity } from 'src/modules/item/domain/entity/listing.entity';
import { PaymentMethodEntity } from 'src/modules/item/domain/entity/payment-method.entity';
import { PictureEntity } from 'src/modules/item/domain/entity/picture.entity';
import { PriceEntity } from 'src/modules/item/domain/entity/price.entity';
import { SaleTermEntity } from 'src/modules/item/domain/entity/sale-term.entity';
import { SearhLocationEntity } from 'src/modules/item/domain/entity/search-location.entity';
import { SellerAddressEntity } from 'src/modules/item/domain/entity/seller-address.entity';
import { ShippingEntity } from 'src/modules/item/domain/entity/shipping.entity';
import { StockEntity } from 'src/modules/item/domain/entity/stock.entity';
import { ThumbnailEntity } from 'src/modules/item/domain/entity/thumbnail.entity';
import { TimeEntity } from 'src/modules/item/domain/entity/time.entity';
import { VariationEntity } from 'src/modules/item/domain/entity/variation.entity';

@Injectable()
export class ConfigurationService {
    public static getDataSource(): TypeOrmModuleOptions {
        const database = this.getConfiguration().database;
        return {
            type: 'postgres',
            host: database.host,
            port: database.port,
            username: database.user,
            password: database.password,
            database: database.name,
            entities: [
                // __dirname + '../modules/item/domain/entity/*.entity.ts'

                ItemEntity,
                AddresItemEntity,
                AttributeEntity,
                CatalogEntity,
                CombinationEntity,
                DescriptionEntity,
                FreeMethodRuleEntity,
                FreeMethodEntity,
                ListingEntity,
                PaymentMethodEntity,
                PictureEntity,
                PriceEntity,
                SaleTermEntity,
                SearhLocationEntity,
                SellerAddressEntity,
                ShippingEntity,
                StockEntity,
                ThumbnailEntity,
                TimeEntity,
                VariationEntity
            ],
            synchronize: true,
        }
    }

    public static getConfiguration(): IConfiguration {
        return configuration()
    }
}

export const configuration = () => (
    {
        port: parseInt(process.env.PORT, 10) || 3000,
        database: {
            host: process.env.DATABASE_HOST || "localhost",
            port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
            user: process.env.DATABASE_USER || "root",
            password: process.env.DATABASE_PASSWORD || "password",
            name: process.env.DATABASE_NAME || "postgres"
        }
    }
)