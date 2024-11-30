import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "pictures"
})
export class PictureEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    mlb_id: string;
    @Column()
    url: string;
    @Column()
    secure_url: string;
    @Column()
    size: string;
    @Column()
    max_size: string;
    @Column()
    quality: string;
}