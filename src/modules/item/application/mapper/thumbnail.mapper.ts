import { ThumbnailEntity } from "../../domain/entity/thumbnail.entity";
import { ThumbnailRes } from "../../presentation/dto/res/thumbanil-res.dto";

export class ThumbnailMapper {
    public static toEntity(
        thumbnail: string,
    ): ThumbnailEntity {
        return {
            id: null,
            thumbnail,
        }
    }

    public static toItemDto(entity: ThumbnailEntity): ThumbnailRes {
        return {
            thumbnail: entity?.thumbnail || null,
            thumbnail_id: entity?.id || null,
        }
    }
}