import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "thumbnail"
})
export class ThumbnailEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    thumbnail_id: string;
    @Column()
    thumbnail: string;
}