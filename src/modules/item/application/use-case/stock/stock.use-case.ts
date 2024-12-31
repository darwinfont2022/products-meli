import { Injectable } from "@nestjs/common";
import { StockEntity } from "src/modules/item/domain/entity/stock.entity";
import { StockRepository } from "src/modules/item/domain/repository/stock.repository";

@Injectable()
export class StockUseCase {
    constructor(private readonly stockRepository: StockRepository) { }
    create(entity: StockEntity): Promise<StockEntity> {
        return this.stockRepository.save(entity)
    }
}