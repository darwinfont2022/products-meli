import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "listing"
})
export class ListingEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    listing_type_id: string; // enum
    @Column()
    listing_source: string;
    @Column()
    automatic_relist: boolean;
    @Column()
    total_listing_fee: number;
}