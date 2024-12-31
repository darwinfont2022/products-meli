import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemEntity } from "./item.entity";

@Entity({
    name: "attributes"
})
export class AttributeEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    value_id: string;
    @Column()
    value_name: string;
    @ManyToOne(() => ItemEntity, (item) => item.attributes, {
        onDelete: 'CASCADE'
    })
    item: ItemEntity;
}