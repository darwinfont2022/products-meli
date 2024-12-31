import { Min } from "class-validator";

export class ParamDto {
    @Min(1)
    id: number
}