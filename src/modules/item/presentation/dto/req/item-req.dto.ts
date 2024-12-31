import { IsEnum, IsNotEmpty, IsPhoneNumber, IsUrl, MaxLength, Min, MinLength, ValidateNested } from "class-validator";
import { BuyingMode } from "../../../domain/entity/enums-type/buying-mode.enum";
import { ConditionEnum } from "../../../domain/entity/enums-type/condition.enum";
import { AttributeReqDto } from "./attribute-req.dto";
import { VariationReqDto } from "./variation-req.dto";
import { StatusEnum } from "../../../domain/entity/enums-type/status.enum";
import { WarrantyEnum } from "../../../domain/entity/enums-type/warranty.enum";
import { InternationalDeliveryEnum } from "src/modules/item/domain/entity/enums-type/international-delivery.enum";
import { SellerAddressReq } from "./seller-address.dto";
import { ECurrency } from "src/modules/item/domain/entity/enums-type/ECurrency.enum";
import { EPaymentMethod } from "src/modules/item/domain/entity/enums-type/payment-method.enum";
import { EItemTag } from "src/modules/item/domain/entity/enums-type/item-tags.enum";
import { EChanel } from "src/modules/item/domain/entity/enums-type/chanel.enum";
import { ESubStatus } from "src/modules/item/domain/entity/enums-type/sub-status.enum";

export class ItemReq {
    @MinLength(5)
    mlb_id: string;
    @MinLength(5)
    title: string;
    @IsNotEmpty()
    seller_id: string;
    @IsNotEmpty()
    category_id: string;
    @IsNotEmpty()
    official_store_id: number;
    @Min(0.01)
    price: number;
    @Min(0.01)
    base_price: number;
    @Min(0.01)
    original_price: number;
    @IsEnum(ECurrency)
    currency_id: ECurrency;
    @Min(1)
    initial_quantity: number;
    @Min(1)
    available_quantity: number;

    @IsNotEmpty()
    catalog_listing: boolean;

    // @IsUrl()
    permalink: string;
    @IsNotEmpty()
    thumbnail: string;
    video_id: string;
    @IsNotEmpty()
    accepts_mercadopago: boolean;
    @IsEnum(EPaymentMethod)
    non_mercado_pago_payment_methods: EPaymentMethod; // Could be enum?
    @IsEnum(InternationalDeliveryEnum)
    international_delivery_mode: InternationalDeliveryEnum;
    @IsPhoneNumber("BR")
    seller_contact: string;

    @MinLength(1)
    catalog_product_id: string;
    @MinLength(1)
    domain_id: string;
    @MinLength(1)
    parent_item_id: string
    automatic_relist: boolean;
    bundle: string;

    @IsNotEmpty()
    @IsEnum(BuyingMode)
    buying_mode: BuyingMode;
    @IsNotEmpty()
    @IsEnum(ConditionEnum)
    condition: ConditionEnum;
    @IsEnum(WarrantyEnum)
    warranty: WarrantyEnum;
    @IsEnum(StatusEnum)
    status: StatusEnum;


    seller_address: SellerAddressReq;
    coverage_areas: string[];
    // @IsNotEmpty()
    attributes: AttributeReqDto[];
    variations: VariationReqDto[];
    @IsEnum(EItemTag, { each: true })
    tags: EItemTag[];
    @IsEnum(ESubStatus, { each: true })
    sub_status: ESubStatus[];
    @IsEnum(EChanel, { each: true })
    channels: EChanel[];
}