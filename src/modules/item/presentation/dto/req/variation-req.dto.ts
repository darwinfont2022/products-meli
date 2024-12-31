import { IsNotEmpty, Min, MinLength } from "class-validator";
import { VariationEntity } from "../../../domain/entity/variation.entity";
import { CombinationReqDto } from "./combination.dto";
import { IDtoReq } from "./IDtoReq";

export class VariationReqDto {
    @Min(0.01)
    price: number;
    @Min(0.01)
    available_quantity: number;
    sold_quantity: number;
    @MinLength(1)
    sale_terms: string;
    @MinLength(1)
    picture_ids: string[];
    @MinLength(1)
    catalog_product_id: string;
    attribute_combinations?: CombinationReqDto[];
}