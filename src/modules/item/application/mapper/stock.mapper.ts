import { StockEntity } from "../../domain/entity/stock.entity";
import { StockReq } from "../../presentation/dto/req/stock-req.dto";
import { StockRes } from "../../presentation/dto/res/stock-res.dto";

export class StockMapper {
    public static initEntity(
        initial_quantity: number,
    ): StockEntity {
        return {
            id: null,
            initial_quantity,
            available_quantity: initial_quantity,
            sold_quantity: 0,
        }
    }

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

    public static toEntityFromDto(dto: StockReq): StockEntity {
        return {
            id: null,
            available_quantity: dto.available_quantity,
            initial_quantity: dto.initial_quantity,
            sold_quantity: 0,
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