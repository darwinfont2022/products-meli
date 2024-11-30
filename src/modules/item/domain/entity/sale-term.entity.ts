import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "sales_terms"
})
export class SaleTermEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: string;
    @Column()
    name: string;
    @Column()
    value_id: string;
    @Column()
    value_name: string;
}