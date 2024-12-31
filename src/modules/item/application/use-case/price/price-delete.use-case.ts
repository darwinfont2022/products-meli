import { Injectable, NotFoundException } from "@nestjs/common";
import { PriceRepository } from "src/modules/item/domain/repository/price.repository";

@Injectable()
export class PriceDeleteUseCase {
    constructor(
        private readonly repositoty: PriceRepository
    ) { }

    async deleteById(id: number) {
        try {
            await this.repositoty.delete(id);
        } catch (e) {
            throw new NotFoundException("price not found")
        }
    }
}