import { BadRequestException, Injectable } from "@nestjs/common";
import { ItemRepository } from "src/modules/item/domain/repository/item.repository";
import { ItemRes } from "src/modules/item/presentation/dto/res/item-res.dto";
import { ItemMapper } from "../../mapper/item.mapper";

@Injectable()
export class ItemLoadUseCase {
    constructor(private readonly itemRepository: ItemRepository) { }

    async getById(id: number): Promise<ItemRes> {
        if (!id) {
            throw new BadRequestException("invalid item_id")
        }
        const item = await this.itemRepository.findById(id);
        return ItemMapper.toDto(item);
    }

    async getAll(): Promise<ItemRes[]> {
        const items = await this.itemRepository.findAll()
        return items.map(i => ItemMapper.toDto(i))
    }

    async getOneOptRelations(id: number, relations: any) {
        if (!id) {
            throw new BadRequestException("invalid item_id")
        }
        const item = await this.itemRepository.findByIdOptRelations(id, relations);

        return ItemMapper.toDto(item);
    }
}