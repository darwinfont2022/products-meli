import { IsNotEmpty, Min } from "class-validator";

export class StockReq {
    // @Min(1)
    // @IsNotEmpty()
    initial_quantity?: number;
    @Min(0)
    available_quantity?: number;
}