import { IsNotEmpty } from "class-validator";

export class CombinationReqDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    value_id: string;
    @IsNotEmpty()
    value_name: string;
    @IsNotEmpty()
    value_type: string;
}