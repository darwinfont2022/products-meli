import { Injectable } from "@nestjs/common";
import { PriceEntity } from "src/modules/item/domain/entity/price.entity";
import { PriceRepository } from "src/modules/item/domain/repository/price.repository";
import { PriceMapper } from "../../mapper/price.mapper";
import { PriceReq } from "src/modules/item/presentation/dto/req/price-req.dto";
import { ItemRepository } from "src/modules/item/domain/repository/item.repository";
import { PriceRes } from "src/modules/item/presentation/dto/res/price-res.dto";

@Injectable()
export class PriceCreateUseCase {
    constructor(
        private readonly priceRepository: PriceRepository,
        private readonly itemRepository: ItemRepository,
    ) { }

    create(priceDto: PriceReq) {
        return PriceMapper.toEntity(
            priceDto.price,
            priceDto.base_price,
            priceDto.original_price,
            priceDto.currency_id,
        )
    }

    save(entity: PriceEntity) {
        return this.priceRepository.save(entity)
    }
}