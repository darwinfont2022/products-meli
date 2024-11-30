import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "catalog_item"
})
export class CatalogEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    catalog_product_id: string;
    @Column()
    catalog_listing: boolean;
}