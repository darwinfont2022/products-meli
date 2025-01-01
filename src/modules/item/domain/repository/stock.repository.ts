import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
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

    find(): Promise<StockEntity[]> {
        return this.stockRepository.find();
    }

    findById(stockId: number): Promise<StockEntity> {
        return this.stockRepository.findOne({
            where: { id: stockId }
        });
    }

    update(entity): Promise<UpdateResult> {
        return this.stockRepository.update(entity.id, entity);
    }

    delete(stockId: number) {
        return this.stockRepository.delete({ id: stockId })
    }
}