import { CatalogEntity } from "src/modules/item/domain/entity/catalog.entity";
import { ECurrency } from "src/modules/item/domain/entity/enums-type/ECurrency.enum";
import { InternationalDeliveryEnum } from "src/modules/item/domain/entity/enums-type/international-delivery.enum";
import { StatusEnum } from "src/modules/item/domain/entity/enums-type/status.enum";
import { WarrantyEnum } from "src/modules/item/domain/entity/enums-type/warranty.enum";
import { PriceRes } from "./price-res.dto";
import { StockRes } from "./stock-res.dto";
import { PaymentMethodRes } from "./payment-method-res.dto";
import { ThumbnailRes } from "./thumbanil-res.dto";
import { CatalogRes } from "./catalog-res.dto";
import { ConditionEnum } from "src/modules/item/domain/entity/enums-type/condition.enum";
import { BuyingMode } from "src/modules/item/domain/entity/enums-type/buying-mode.enum";
import { EItemTag } from "src/modules/item/domain/entity/enums-type/item-tags.enum";
import { ESubStatus } from "src/modules/item/domain/entity/enums-type/sub-status.enum";
import { EChanel } from "src/modules/item/domain/entity/enums-type/chanel.enum";
import { AttributeEntity } from "src/modules/item/domain/entity/attribute.entity";
import { IAttributeRes } from "./attribute-res.dto";
import { IVariationRes } from "./variation-rea.dto";

export interface ItemRes {
    id: number;
    mlb_id: string;
    title: string;
    seller_id: string;
    category_id: string;
    official_store_id: number;
    permalink?: string;
    video_id?: string;
    parent_item_id?: string;

    tags: EItemTag[];
    status: StatusEnum;
    sub_status: ESubStatus[];
    channels: EChanel[];

    domain_id: string;

    buying_mode: BuyingMode;
    condition: ConditionEnum;
    international_delivery_mode: InternationalDeliveryEnum;

    warranty: WarrantyEnum;

    pricing: PriceRes;
    stocks: StockRes;
    thumbnail: ThumbnailRes;
    payment_methods?: PaymentMethodRes;
    catalog: CatalogRes;
    // seller_address: SellerAddress;
    seller_contact?: string;

    attributes: IAttributeRes[];
    variations: IVariationRes[];

    date_created?: Date;
    last_updated?: Date;
}