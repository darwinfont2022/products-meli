import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ItemEntity } from '../entity/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemRepository {
    constructor(
        @InjectRepository(ItemEntity)
        private itemRepository: Repository<ItemEntity>
    ) { }

    save(entity: ItemEntity): Promise<ItemEntity> {
        return this.itemRepository.save(entity)
    }

    saveAll(entity: ItemEntity[]) {
        return this.itemRepository.save(entity);
    }

    async findById(id: number): Promise<ItemEntity> {
        return await this.itemRepository.findOne({
            where: { id },
            relations: {
                stock: true,
                price: true,
                thumbnail: true,
                payment_method: true,
                attributes: true,
                variations: true
            },
        });
    }

    async findByIdOptRelations(
        id: number,
        relations: any
    ) {
        return await this.itemRepository.findOne({
            where: { id },
            relations: {
                ...relations
            },
        });
    }

    findAll(): Promise<ItemEntity[]> {
        return this.itemRepository.find({
            relations: {
                stock: true,
                price: true,
                thumbnail: true,
                payment_method: true,
            },
        });
    }

    findAllInIds(ids: number[]): Promise<ItemEntity[]> {
        throw new Error('Method not implemented.');
    }

    update(id: number, entity: ItemEntity) {
        return this.itemRepository.update(id, entity);
    }

    delete(id: number): Promise<ItemEntity> {
        throw new Error('Method not implemented.');
    }
}
