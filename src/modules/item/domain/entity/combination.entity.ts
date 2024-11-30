import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { VariationEntity } from "./variation.entity";

@Entity({
    name: "combinations"
})
export class CombinationEntity {
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
    @Column()
    value_type: string;
    @ManyToOne(() => VariationEntity, (variation) => variation)
    variation: VariationEntity;
}