import { Module } from "@nestjs/common";
import { ItemRepository } from "./repository/item.repository";
import { ItemEntity } from "./entity/item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntity } from "./entity/stock.entity";
import { PriceEntity } from "./entity/price.entity";
import { SellerAddressEntity } from "./entity/seller-address.entity";
import { PaymentMethodEntity } from "./entity/payment-method.entity";
import { CombinationEntity } from "./entity/combination.entity";
import { AttributeEntity } from "./entity/attribute.entity";
import { DescriptionEntity } from "./entity/description.entity";
import { FreeMethodEntity } from "./entity/free-method.entity";
import { FreeMethodRuleEntity } from "./entity/free-method-rule.entity";
import { ListingEntity } from "./entity/listing.entity";
import { PictureEntity } from "./entity/picture.entity";
import { SaleTermEntity } from "./entity/sale-term.entity";
import { ShippingEntity } from "./entity/shipping.entity";
import { ThumbnailEntity } from "./entity/thumbnail.entity";
import { TimeEntity } from "./entity/time.entity";
import { VariationEntity } from "./entity/variation.entity";
import { PriceRepository } from "./repository/price.repository";
import { StockRepository } from "./repository/stock.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ItemEntity, StockEntity, PriceEntity, SellerAddressEntity,
            PaymentMethodEntity, CombinationEntity, AttributeEntity, DescriptionEntity,
            FreeMethodEntity, FreeMethodRuleEntity, ListingEntity, PictureEntity, SaleTermEntity,
            ShippingEntity, ThumbnailEntity, TimeEntity, VariationEntity
        ])
    ],
    providers: [
        ItemRepository,
        PriceRepository,
        StockRepository
    ],
    exports: [
        ItemRepository,
        PriceRepository,
        StockRepository
    ]
})
export class DomainModule {
    constructor() { }
}