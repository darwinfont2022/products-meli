import { ECurrency } from "src/modules/item/domain/entity/enums-type/ECurrency.enum";

export interface PriceRes {
    price_id: number,
    price: number,
    base_price: number,
    original_price: number,
    currency_id: ECurrency,
}