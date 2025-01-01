import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { StockRepository } from "src/modules/item/domain/repository/stock.repository";
import { ItemLoadUseCase } from "../item/item-load.use-case";
import { StockRes } from "src/modules/item/presentation/dto/res/stock-res.dto";
import { StockMapper } from "../../mapper/stock.mapper";

@Injectable()
export class StockLoadUseCase {
    constructor(
        private readonly stockRepository: StockRepository,
        private readonly itemUseCase: ItemLoadUseCase,
    ) { }


    async loadAll(): Promise<StockRes[]> {
        const stocks = await this.stockRepository.find();

        return stocks.map((s) => StockMapper.toItemDto(s))
    }

    async loadByIdOrItemId(stockId: number, itemId: number): Promise<StockRes> {
        if (stockId) {
            return this.loadById(stockId);
        }
        return this.loadByItemId(itemId)
    }

    async loadById(stockId: number): Promise<StockRes> {
        if (!stockId) {
            throw new BadRequestException("invalid stock_id")
        }
        const stock = await this.stockRepository.findById(stockId);
        if (!stock) {
            throw new NotFoundException("stock not found");
        }

        return StockMapper.toItemDto(stock);
    }

    async loadByItemId(itemId: number): Promise<StockRes> {
        const item = await this.itemUseCase.getOneOptRelations(itemId, {
            stock: true
        });

        return item.stocks;
    }
}