import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "price"
})
export class PriceEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    base_price: number;
    @Column()
    original_price: number;
    @Column()
    currency_id: number;
}