import { MinLength } from "class-validator";

export class AttributeReqDto {
    @MinLength(1)
    name: string;
    @MinLength(1)
    value_id: string;
    @MinLength(1)
    value_name: string;
}