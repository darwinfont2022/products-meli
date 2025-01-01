import { Min } from "class-validator";

export class SoldQuantityReq {
    @Min(0)
    quantity: number
}

export enum ESoldAction {
    SOLD = 'sold',
    REFUND = 'refund'
}