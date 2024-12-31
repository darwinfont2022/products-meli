import { ECurrency } from "../../domain/entity/enums-type/ECurrency.enum";
import { PriceEntity } from "../../domain/entity/price.entity";
import { PriceReq } from "../../presentation/dto/req/price-req.dto";
import { PriceRes } from "../../presentation/dto/res/price-res.dto";

export class PriceMapper {
    public static toEntity(
        price: number,
        base_price: number,
        original_price: number,
        currency_id: ECurrency,
    ): PriceEntity {
        return {
            id: null,
            price,
            base_price,
            original_price,
            currency_id,
        }
    }

    public static toItemEntity(entity: PriceEntity): PriceRes {
        return {
            price_id: entity?.id || null,
            price: entity?.price || null,
            base_price: entity?.base_price || null,
            original_price: entity?.original_price || null,
            currency_id: entity?.currency_id || null,
        }
    }
}