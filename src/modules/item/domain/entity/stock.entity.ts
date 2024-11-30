import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "stock"
})
export class StockEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    initial_quantity: number;
    @Column()
    available_quantity: number;
    @Column()
    sold_quantity: number; //Somente disponível com token proprietário
}