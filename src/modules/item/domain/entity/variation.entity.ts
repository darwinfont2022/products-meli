import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ItemEntity } from "./item.entity";
import { CombinationEntity } from "./combination.entity";

@Entity({
    name: "variation"
})
export class VariationEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    price: number;
    @Column()
    available_quantity: number;
    @Column()
    sold_quantity: number;
    @Column()
    sale_terms: string;
    @Column("simple-array")
    picture_ids?: string[];
    @Column()
    catalog_product_id: string;
    @ManyToOne(() => ItemEntity, (item) => item.attributes, {
        onDelete: 'CASCADE'
    })
    item: ItemEntity
    @OneToMany(() => CombinationEntity, (attr) => attr.variation, {
        onDelete: 'CASCADE'
    })
    attribute_combinations?: CombinationEntity[];
}