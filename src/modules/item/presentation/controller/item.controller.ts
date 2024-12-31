import { Body, Controller, Get, Header, Param, Post, Put, Res } from "@nestjs/common";
import { ItemRes } from "../dto/res/item-res.dto";
import { ItemReq } from "../dto/req/item-req.dto";
import { ItemCreateUseCase } from "../../application/use-case/item/item-create.use-case";
import { ItemLoadUseCase } from "../../application/use-case/item/item-load.use-case";
import { ParamDto } from "../dto/req/param.dto";
import { ItemUpdateUseCase } from "../../application/use-case/item/item-update.use-case";

@Controller("/item")
export class ItemController {

    constructor(
        private readonly itemCreate: ItemCreateUseCase,
        private readonly itemLoad: ItemLoadUseCase,
        private readonly itemUpdate: ItemUpdateUseCase,
    ) {
    }


    @Post("")
    create(@Body() itemDto: ItemReq): Promise<ItemRes> {
        return this.itemCreate.create(itemDto)
    }

    @Get(":id")
    getItemById(@Param('id') id: number): Promise<ItemRes> {
        return this.itemLoad.getById(id);
    }

    @Get()
    getItems(): Promise<ItemRes[]> {
        return this.itemLoad.getAll();
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() itemDto: ItemReq) {
        return this.itemUpdate.update(id, itemDto);
    }
}