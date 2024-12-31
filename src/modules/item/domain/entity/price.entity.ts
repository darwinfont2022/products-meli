import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ECurrency } from "./enums-type/ECurrency.enum";
import { ItemEntity } from "./item.entity";

@Entity({
    name: "price"
})
export class PriceEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    price: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    base_price: number;
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    original_price: number;
    @Column({
        type: "enum",
        enum: ECurrency,
        default: ECurrency.USD
    })
    currency_id: ECurrency;

    // @OneToOne(() => ItemEntity, (i) => i.price)
    // item: ItemEntity;
}