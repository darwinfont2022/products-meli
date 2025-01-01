import { Body, Controller, Get, Param, Patch, Put, Query } from "@nestjs/common";
import { StockLoadUseCase } from "../../application/use-case/stock/stock-load.use-case";
import { StockUpdateUseCase } from "../../application/use-case/stock/stock-update.use-case";
import { StockRes } from "../dto/res/stock-res.dto";
import { StockReq } from "../dto/req/stock-req.dto";
import { ESoldAction, SoldQuantityReq } from "../dto/req/sold-req.dto";

@Controller("/api/stock")
export class StockController {
    constructor(
        private readonly loadUseCase: StockLoadUseCase,
        private readonly updateUseCase: StockUpdateUseCase,
    ) { }

    @Get()
    loadById(
        @Query('stock_id') stock_id?: number,
        @Query('item_id') ietm_id?: number
    ): Promise<StockRes> {
        return this.loadUseCase.loadByIdOrItemId(stock_id, ietm_id);
    }

    @Get()
    loadAll(): Promise<StockRes[]> {
        return this.loadUseCase.loadAll()
    }

    @Put(':stock_id')
    updateById(
        @Param('stock_id') stock_id: number,
        @Body() dto: StockReq
    ) {
        return this.updateUseCase.updateStockById(stock_id, dto)
    }

    @Patch(':item_id')
    updateByItem(
        @Param('item_id') item_id: number,
        @Body() dto: StockReq
    ) {
        return this.updateUseCase.updateByItemId(item_id, dto)
    }

    @Patch('/sold/:item_id')
    updateSoldQuantity(
        @Param('item_id') item_id: number,
        @Body() dto: SoldQuantityReq,
        @Query('action') action: ESoldAction = ESoldAction.SOLD
    ) {
        return this.updateUseCase.updateBySoldQuantity(item_id, dto, action)
    }
}