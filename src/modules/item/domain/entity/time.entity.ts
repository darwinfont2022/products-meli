import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "item_time"
})
export class TimeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    start_time: string;  //Somente disponível com token proprietário
    @Column()
    historical_start_time: string;//Somente disponível com token proprietário
    @Column()
    stop_time: string; //Somente disponível com token proprietário
}