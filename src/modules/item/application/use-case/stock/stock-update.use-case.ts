import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { StockRepository } from "src/modules/item/domain/repository/stock.repository";
import { StockReq } from "src/modules/item/presentation/dto/req/stock-req.dto";
import { ItemLoadUseCase } from "../item/item-load.use-case";
import { StockMapper } from "../../mapper/stock.mapper";
import { StockRes } from "src/modules/item/presentation/dto/res/stock-res.dto";
import { ESoldAction, SoldQuantityReq } from "src/modules/item/presentation/dto/req/sold-req.dto";

@Injectable()
export class StockUpdateUseCase {

    constructor(
        private readonly stockRepository: StockRepository,
        private readonly itemUseCase: ItemLoadUseCase,
    ) { }

    async updateStock(stockId: number, itemId: number, stockDto: StockReq) {
        if (!stockId && !itemId) {
            throw new BadRequestException("stock_id or item_id to be required")
        }

        if (itemId) {
            return await this.updateByItemId(itemId, stockDto);
        }

        await this.updateStockById(stockId, stockDto);
    }

    async updateStockById(stockId: number, stockDto: StockReq) {
        const stockEntity = await this.stockRepository.findById(stockId);

        if (!stockEntity) {
            throw new NotFoundException("stock not found");
        }

        this.validateStockUpdate(stockDto.available_quantity, stockEntity.initial_quantity)

        stockEntity.available_quantity = stockDto.available_quantity;

        if (stockDto?.initial_quantity) {
            stockEntity.initial_quantity = stockDto.initial_quantity;
        }

        await this.stockRepository.update(stockEntity);
    }

    async updateByItemId(itemId: number, stockDto: StockReq): Promise<StockRes> {
        const { stocks } = await this.itemUseCase.getById(itemId);

        const entity = StockMapper.toEntityFromDto(stockDto)
        entity.sold_quantity = stocks.sold_quantity;

        entity.initial_quantity = stockDto.initial_quantity ?? stocks.initial_quantity;

        this.validateStockUpdate(stockDto.available_quantity, entity.initial_quantity)

        entity.id = stocks.stock_id;

        if (!stockDto?.initial_quantity) {
            entity.initial_quantity = stockDto.initial_quantity;
        }

        await this.stockRepository.update(entity);

        return StockMapper.toItemDto(entity)
    }

    validateStockUpdate(available: number, initial: number) {
        if (initial === undefined || initial === null && initial <= 0) {
            throw new BadRequestException("initial_quantity must be a positive number");
        }

        if (available > initial) {
            throw new BadRequestException("available_quantity most be lest that initial_quantity");
        }
    }

    async updateBySoldQuantity(
        itemId: number,
        soldDto: SoldQuantityReq,
        action: ESoldAction,
    ): Promise<StockRes> {
        const { stocks } = await this.itemUseCase.getOneOptRelations(itemId, { stock: true })

        const entity = StockMapper.initEntity(stocks.initial_quantity);

        entity.id = stocks.stock_id;

        if (action === ESoldAction.SOLD) {
            const newAvailable = stocks.available_quantity - soldDto.quantity

            if (newAvailable < 0) {
                throw new BadRequestException("Insufficient stock for sale")
            }

            entity.available_quantity = newAvailable;
            entity.sold_quantity = stocks.sold_quantity + soldDto.quantity;
        } else {
            const newAvailable = stocks.available_quantity + soldDto.quantity;

            if (newAvailable > stocks.initial_quantity) {
                throw new BadRequestException("Refund exceeds initial stock")
            }

            entity.available_quantity = newAvailable;
            entity.sold_quantity = stocks.sold_quantity - soldDto.quantity;
        }

        await this.stockRepository.update(entity)

        return StockMapper.toItemDto(entity)
    }
}