import { Injectable } from "@nestjs/common";
import { PriceEntity } from "src/modules/item/domain/entity/price.entity";
import { PriceRepository } from "src/modules/item/domain/repository/price.repository";
import { PriceMapper } from "../../mapper/price.mapper";
import { PriceRes } from "src/modules/item/presentation/dto/res/price-res.dto";

@Injectable()
export class PriceLoadUseCase {
    constructor(private readonly repository: PriceRepository) { }

    async loadById(id: number): Promise<PriceRes> {
        const price: PriceEntity = await this.repository.findById(id)
        return PriceMapper.toItemEntity(price);
    }

    async beetwin(min: number, max: number): Promise<PriceRes[]> {
        const prices: PriceEntity[] = await this.repository.minMax(min, max)
        return prices.map((p) => PriceMapper.toItemEntity(p))
    }
}