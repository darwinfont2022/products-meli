import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "addres_item"
})
export class AddresItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: string;
    @Column()
    name: string;
}