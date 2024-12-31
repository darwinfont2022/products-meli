import { CatalogEntity } from "../../domain/entity/catalog.entity";
import { CatalogRes } from "../../presentation/dto/res/catalog-res.dto";

export class CatalogMapper {
    public static toEntity(
        catalog_product_id: string,
        catalog_listing: boolean
    ): CatalogEntity {
        return {
            id: null,
            catalog_product_id,
            catalog_listing,
        }
    }
    public static toItemDto(entity: CatalogEntity): CatalogRes {
        return {
            catalog_id: entity?.id || null,
            catalog_listing: entity?.catalog_listing || null,
            catalog_product_id: entity?.catalog_product_id || null
        }
    }
}