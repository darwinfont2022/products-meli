import { ECurrency } from "src/modules/item/domain/entity/enums-type/ECurrency.enum";

export class PriceReq {
    price: number;
    base_price: number;
    original_price: number;
    currency_id: ECurrency;
}