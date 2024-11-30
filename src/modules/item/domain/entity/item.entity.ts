import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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
    category_id: string;
    @Column()
    official_store_id: number;
    @Column()
    permalink: string;
    @Column()
    video_id: string;
    @Column()
    international_delivery_mode: string;
    @Column()
    location: string;
    @Column()
    domain_id: string;
    @Column()
    parent_item_id: string
    @CreateDateColumn()
    date_created: Date;
    @UpdateDateColumn()
    last_updated: Date;
    @Column()
    health: number;
    @Column()
    bundle: string;
    // ENUM's
    @Column(
        {
            type: "enum",
            enum: BuyingMode,
            default: BuyingMode.BUYIT_NOW
        }
    )
    buying_mode: BuyingMode;
    @Column({
        type: "enum",
        enum: StatusEnum,
        default: StatusEnum.ACTIVE
    })
    status: StatusEnum;
    @Column({
        type: "enum",
        enum: WarrantyEnum,
        default: WarrantyEnum.MAX
    })
    warranty: WarrantyEnum;
    @Column({
        type: "enum",
        enum: ConditionEnum,
        default: ConditionEnum.NOT_SPECIFIED
    })
    condition: ConditionEnum; // enum

    // ARRAY's
    @Column("simple-array")
    coverage_areas: string[];
    @Column("simple-array")
    tags: string[];
    @Column("simple-array")
    sub_status: string[];
    @Column("simple-array")
    channels: string[];//Somente disponível com token proprietário
    @Column("simple-array")
    deal_ids: string[];

    // One to One
    // seller_contact: string;
    @OneToOne(() => TimeEntity)
    @JoinColumn()
    time: TimeEntity;
    @OneToOne(() => PriceEntity)
    @JoinColumn()
    price: PriceEntity;
    @OneToOne(() => StockEntity)
    @JoinColumn()
    quantiy: StockEntity;
    @OneToOne(() => ThumbnailEntity)
    @JoinColumn()
    thumbnail: ThumbnailEntity;
    @OneToOne(() => PaymentMethodEntity)
    @JoinColumn()
    payment_method: PaymentMethodEntity;
    @OneToOne(() => SellerAddressEntity)
    @JoinColumn()
    seller_address: SellerAddressEntity;
    @OneToOne(() => CatalogEntity)
    @JoinColumn()
    catalog: CatalogEntity;

    // Ono to Many
    @OneToMany(() => AttributeEntity, (attribute) => attribute.item)
    attributes: AttributeEntity[];
    @OneToMany(() => VariationEntity, (variation) => variation.item)
    variations: VariationEntity[];
}