import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AddresItemEntity } from "./addres-item.entity";

@Entity({
    name: "search_location"
})
export class SearhLocationEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    neighborhood: AddresItemEntity;
    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    city: AddresItemEntity;
    @OneToOne(() => AddresItemEntity)
    @JoinColumn()
    state: AddresItemEntity;
}