import { StockEntity } from "../../domain/entity/stock.entity";
import { StockRes } from "../../presentation/dto/res/stock-res.dto";

export class StockMapper {
    public static toEntity(
        initial_quantity: number,
        available_quantity: number,
        sold_quantity: number,
    ): StockEntity {
        return {
            id: null,
            initial_quantity,
            available_quantity,
            sold_quantity,
        }
    }

    public static toItemDto(stock: StockEntity): StockRes {
        return {
            stock_id: stock?.id || null,
            initial_quantity: stock?.initial_quantity || null,
            available_quantity: stock?.available_quantity || null,
            sold_quantity: stock?.sold_quantity || null,
        }
    }
}