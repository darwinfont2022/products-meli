import { Injectable } from "@nestjs/common";
import { PriceEntity } from "../entity/price.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Repository, UpdateResult } from "typeorm";

@Injectable()
export class PriceRepository {
    constructor(
        @InjectRepository(PriceEntity)
        private priceRepository: Repository<PriceEntity>
    ) { }

    save(newPeice: PriceEntity): Promise<PriceEntity> {
        return this.priceRepository.save(newPeice)
    }

    update(entity: PriceEntity): Promise<UpdateResult> {
        return this.priceRepository.update({ id: entity.id }, entity);
    }

    findById(id: number): Promise<PriceEntity> {
        return this.priceRepository.findOne({
            where: { id },
        })
    }

    minMax(min: number, max: number) {
        return this.priceRepository.find({
            where: {
                price: Between(min, max)
            }
        })
    }

    delete(id: number) {
        this.priceRepository.delete({ id });
    }
}