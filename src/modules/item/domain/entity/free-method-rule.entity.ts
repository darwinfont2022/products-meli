import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "free_method_rule"
})
export class FreeMethodRuleEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    default: boolean;
    // enum
    @Column()
    free_mode: string;
    @Column()
    free_shipping_flag: boolean;
    @Column()
    value: string;
}