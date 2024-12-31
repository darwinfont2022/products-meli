import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SellerAddressEntity } from "./seller-address.entity";
import { AttributeEntity } from "./attribute.entity";
import { VariationEntity } from "./variation.entity";
import { StockEntity } from "./stock.entity";
import { ThumbnailEntity } from "./thumbnail.entity";
import { CatalogEntity } from "./catalog.entity";
import { PaymentMethodEntity } from "./payment-method.entity";
import { BuyingMode } from "./enums-type/buying-mode.enum";
import { StatusEnum } from "./enums-type/status.enum";
import { WarrantyEnum } from "./enums-type/warranty.enum";
import { ConditionEnum } from "./enums-type/condition.enum";
import { TimeEntity } from "./time.entity";
import { PriceEntity } from "./price.entity";
import { InternationalDeliveryEnum } from "./enums-type/international-delivery.enum";
import { EItemTag } from "./enums-type/item-tags.enum";
import { ESubStatus } from "./enums-type/sub-status.enum";
import { EChanel } from "./enums-type/chanel.enum";

@Entity({
    name: "item"
})
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: string;
    @Column()
    title: string;
    @Column()
    seller_id: string;
    @Column()
    category_id?: string;
    @Column()
    official_store_id?: number;
    @Column()
    permalink?: string;
    @Column()
    video_id?: string;

    @Column()
    domain_id?: string;
    @Column()
    parent_item_id?: string
    @CreateDateColumn()
    date_created?: Date;
    @UpdateDateColumn()
    last_updated?: Date;
    // ENUM's
    @Column({
        type: "enum",
        enum: InternationalDeliveryEnum,
        default: InternationalDeliveryEnum.NONE
    })
    international_delivery_mode?: InternationalDeliveryEnum;
    @Column(
        {
            type: "enum",
            enum: BuyingMode,
            default: BuyingMode.BUYIT_NOW
        }
    )
    buying_mode?: BuyingMode;
    @Column({
        type: "enum",
        enum: StatusEnum,
        default: StatusEnum.ACTIVE
    })
    status?: StatusEnum;
    @Column({
        type: "enum",
        enum: WarrantyEnum,
        default: WarrantyEnum.MAX
    })
    warranty?: WarrantyEnum;
    @Column({
        type: "enum",
        enum: ConditionEnum,
        default: ConditionEnum.NOT_SPECIFIED
    })
    condition?: ConditionEnum;

    // ARRAY's
    @Column({
        type: "enum",
        enum: EItemTag,
        array: true
    })
    tags?: EItemTag[];
    @Column({
        type: "enum",
        enum: ESubStatus,
        array: true
    })
    sub_status?: ESubStatus[];
    @Column({
        type: "enum",
        enum: EChanel,
        array: true
    })
    channels?: EChanel[];//Somente disponível com token proprietário

    @OneToOne((type) => PriceEntity, {
        cascade: true
    })
    @JoinColumn()
    price: PriceEntity;
    @OneToOne((type) => StockEntity, {
        cascade: true
    })
    @JoinColumn()
    stock?: StockEntity;
    @OneToOne((type) => ThumbnailEntity, {
        cascade: true
    })
    @JoinColumn()
    thumbnail?: ThumbnailEntity;
    @OneToOne((type) => PaymentMethodEntity, {
        cascade: true
    })
    @JoinColumn()
    payment_method: PaymentMethodEntity;
    @OneToOne((type) => SellerAddressEntity, {
        cascade: true
    })
    @JoinColumn()
    seller_address?: SellerAddressEntity;
    @OneToOne((type) => CatalogEntity, {
        cascade: true
    })
    @JoinColumn()
    catalog?: CatalogEntity;

    // Ono to Many
    @OneToMany((type) => AttributeEntity, (attribute) => attribute.item, {
        cascade: true
    })
    @JoinTable()
    attributes?: AttributeEntity[];
    @OneToMany(() => VariationEntity, (variation) => variation.item, {
        cascade: true
    })
    @JoinTable()
    variations?: VariationEntity[];
}