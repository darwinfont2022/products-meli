import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity(
    {
        name: "description"
    }
)
export class DescriptionEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: string;
    @Column()
    value: string;
}