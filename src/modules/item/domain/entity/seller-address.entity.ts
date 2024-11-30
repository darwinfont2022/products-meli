import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SearhLocationEntity } from "./search-location.entity";
import { AddresItemEntity } from "./addres-item.entity";

@Entity({
    name: "seller_address"
})
export class SellerAddressEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    city: AddresItemEntity;
    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    state: AddresItemEntity;
    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    country: AddresItemEntity;
    @OneToOne(() => SearhLocationEntity)
    @JoinColumn()
    search_location: SearhLocationEntity;
}