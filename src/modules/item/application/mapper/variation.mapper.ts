import { VariationEntity } from "../../domain/entity/variation.entity";
import { CombinationReqDto } from "../../presentation/dto/req/combination.dto";
import { VariationReqDto } from "../../presentation/dto/req/variation-req.dto";
import { IVariationRes } from "../../presentation/dto/res/variation-rea.dto";
import { CombinationMapper } from "./combination.mapper";

export class VariationMapper {
    public static toEntity(dto: VariationReqDto): VariationEntity {
        return {
            id: null,
            ...dto,
            item: null,
            attribute_combinations: CombinationMapper.toEntities(dto.attribute_combinations)
        }
    }

    public static toDto(v: VariationEntity): IVariationRes {
        return {
            id: v.id,
            available_quantity: v.available_quantity,
            catalog_product_id: v.catalog_product_id,
            picture_ids: v.picture_ids,
            price: v.price,
            sale_terms: v.sale_terms,
            sold_quantity: v.sold_quantity,
        }
    }

    public static toDtos(variations: VariationEntity[]): IVariationRes[] {
        return variations.map((v) => this.toDto(v))
    }
}