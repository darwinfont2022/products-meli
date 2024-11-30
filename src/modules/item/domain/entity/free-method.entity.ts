import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FreeMethodRuleEntity } from "./free-method-rule.entity";

@Entity({
    name: "free_method"
})
export class FreeMethodEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: number;
    // rule: FreeMethodRuleEntity;
}