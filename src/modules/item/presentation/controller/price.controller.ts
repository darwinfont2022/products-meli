import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { PriceCreateUseCase } from "../../application/use-case/price/price-create.use-case";
import { PriceLoadUseCase } from "../../application/use-case/price/price-load.use-case";
import { PriceUpdateUseCase } from "../../application/use-case/price/price-update.use-case";
import { PriceDeleteUseCase } from "../../application/use-case/price/price-delete.use-case";
import { PriceReq } from "../dto/req/price-req.dto";

@Controller("/api/price")
export class PriceController {
    constructor(
        private readonly createUseCase: PriceCreateUseCase,
        private readonly loadUseCase: PriceLoadUseCase,
        private readonly updateUseCase: PriceUpdateUseCase,
        private readonly deleteUseCase: PriceDeleteUseCase,
    ) { }

    @Get()
    loadById(@Query('id') id: number) {
        return this.loadUseCase.loadById(id);
    }

    @Get("/filter")
    minMax(
        @Query('min') min: number,
        @Query('max') max: number,
    ) {
        return this.loadUseCase.beetwin(min, max)
    }

    @Put()
    updatePrice(
        @Body() dto: PriceReq,
        @Query('price_id') price_id?: number,
        @Query('item_id') item_id?: number,
    ) {
        return this.updateUseCase.update(price_id, item_id, dto);
    }

    @Delete()
    deletePriceById(@Query('id') id?: number,) {
        this.deleteUseCase.deleteById(id);
    }
}