import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FreeMethodEntity } from "./free-method.entity";

@Entity({
    name: "shipping"
})
export class ShippingEntity {
    @PrimaryGeneratedColumn()
    id: number;
    // enum
    @Column()
    mode: string;
    // Relarion O + M
    // free_methods: FreeMethodEntity[];
    // tags: string[];
    @Column()
    dimensions: string;
    @Column()
    local_pick_up: boolean;
    @Column()
    free_shipping: boolean;
    // enum
    @Column()
    logistic_type: string;
    @Column()
    store_pick_up: boolean;
}