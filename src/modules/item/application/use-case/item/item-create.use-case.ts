import { Injectable } from "@nestjs/common";
import { ItemRepository } from "../../../domain/repository/item.repository";
import { ItemReq } from "src/modules/item/presentation/dto/req/item-req.dto";
import { ItemRes } from "src/modules/item/presentation/dto/res/item-res.dto";
import { ItemMapper } from "../../mapper/item.mapper";
import { ItemEntity } from "src/modules/item/domain/entity/item.entity";
import { PriceReq } from "src/modules/item/presentation/dto/req/price-req.dto";
import { PriceRepository } from "src/modules/item/domain/repository/price.repository";
import { PriceMapper } from "../../mapper/price.mapper";
import { PriceEntity } from "src/modules/item/domain/entity/price.entity";
import { PriceCreateUseCase } from "../price/price-create.use-case";
import { StockUseCase } from "../stock/stock.use-case";
import { StockMapper } from "../../mapper/stock.mapper";
import { PaymentMethodMapper } from "../../mapper/payment-method.mapper";
import { ThumbnailMapper } from "../../mapper/thumbnail.mapper";
import { CatalogMapper } from "../../mapper/catalog.mapper";
import { AttributeMapper } from "../../mapper/attribute.mapper";
import { VariationMapper } from "../../mapper/variation.mapper";

@Injectable()
export class ItemCreateUseCase {
    constructor(
        private readonly itemRepository: ItemRepository,
    ) {
    }

    async create(dto: ItemReq): Promise<ItemRes> {
        let entity: ItemEntity = ItemMapper.toEntity(dto)

        entity.price = PriceMapper.toEntity(
            dto.price,
            dto.base_price,
            dto.original_price,
            dto.currency_id
        );

        entity.stock = StockMapper.initEntity(
            dto.initial_quantity
        )

        entity.payment_method = PaymentMethodMapper.toEntity(dto.accepts_mercadopago, dto.non_mercado_pago_payment_methods);
        entity.thumbnail = ThumbnailMapper.toEntity(dto.thumbnail)
        entity.catalog = CatalogMapper.toEntity(dto.catalog_product_id, dto.catalog_listing)
        entity.attributes = dto.attributes.map(i => AttributeMapper.toEntity(i));
        entity.variations = dto.variations.map((v) => VariationMapper.toEntity(v))

        let rsp = await this.itemRepository.save(entity)

        return ItemMapper.toDto(rsp);
    }
}