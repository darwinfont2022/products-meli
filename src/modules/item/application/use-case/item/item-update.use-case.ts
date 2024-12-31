import { Injectable } from "@nestjs/common";
import { ItemRepository } from "src/modules/item/domain/repository/item.repository";
import { ItemReq } from "src/modules/item/presentation/dto/req/item-req.dto";
import { ItemMapper } from "../../mapper/item.mapper";

@Injectable()
export class ItemUpdateUseCase {
    constructor(private readonly repository: ItemRepository) { }
    async update(id: number, dto: ItemReq) {
        let entityToUpdate = await this.repository.findById(id);

        console.log('ietm id ', entityToUpdate);

        entityToUpdate = { ...ItemMapper.toEntity(dto) }
        entityToUpdate.id = id;
        console.log('ietm 2', entityToUpdate);
        const entity = await this.repository.update(id, entityToUpdate);
        return entity;
    }
}