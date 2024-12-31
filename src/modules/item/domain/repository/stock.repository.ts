import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StockEntity } from "../entity/stock.entity";

@Injectable()
export class StockRepository {
    constructor(
        @InjectRepository(StockEntity)
        private stockRepository: Repository<StockEntity>
    ) { }

    save(newStock: StockEntity): Promise<StockEntity> {
        return this.stockRepository.save(newStock)
    }
}