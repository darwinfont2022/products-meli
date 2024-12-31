import { ItemEntity } from "../../domain/entity/item.entity";
import { ItemReq } from "../../presentation/dto/req/item-req.dto";
import { ItemRes } from "../../presentation/dto/res/item-res.dto";
import { AttributeMapper } from "./attribute.mapper";
import { CatalogMapper } from "./catalog.mapper";
import { PaymentMethodMapper } from "./payment-method.mapper";
import { PriceMapper } from "./price.mapper";
import { StockMapper } from "./stock.mapper";
import { ThumbnailMapper } from "./thumbnail.mapper";
import { VariationMapper } from "./variation.mapper";

export class ItemMapper {
    public static toEntity(dto: ItemReq): ItemEntity {
        let entity: ItemEntity = new ItemEntity()
        entity = {
            ...dto,
            id: null,
            attributes: [],
            variations: [],

            price: null,
            stock: null,
            payment_method: null,
            seller_address: null,
            thumbnail: null,
        }

        return entity
    }

    public static toDto(entity: ItemEntity): ItemRes {
        const stock = StockMapper.toItemDto(entity.stock)
        const price = PriceMapper.toItemEntity(entity.price);
        const payment_method = PaymentMethodMapper.toItemEntity(entity.payment_method);
        const thumbnail = ThumbnailMapper.toItemDto(entity.thumbnail);
        const catalog = CatalogMapper.toItemDto(entity.catalog);

        return {
            id: entity.id,
            mlb_id: entity.mlb_id,
            title: entity.title,
            seller_id: entity.seller_id,
            category_id: entity.category_id,
            official_store_id: entity.official_store_id,
            domain_id: entity.domain_id,
            buying_mode: entity.buying_mode,
            condition: entity.condition,
            status: entity.status,
            sub_status: entity.sub_status,
            channels: entity.channels,
            tags: entity.tags,
            warranty: entity.warranty,
            international_delivery_mode: entity.international_delivery_mode,
            stocks: stock,
            payment_methods: payment_method,
            pricing: price,
            thumbnail: thumbnail,
            catalog: catalog,
            seller_contact: null,
            attributes: AttributeMapper.toDtos(entity.attributes),
            variations: VariationMapper.toDtos(entity.variations)
        };
    }
}