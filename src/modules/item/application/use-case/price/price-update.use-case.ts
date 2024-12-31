import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PriceEntity } from "src/modules/item/domain/entity/price.entity";
import { PriceRepository } from "src/modules/item/domain/repository/price.repository";
import { PriceReq } from "src/modules/item/presentation/dto/req/price-req.dto";
import { PriceMapper } from "../../mapper/price.mapper";
import { ItemRepository } from "src/modules/item/domain/repository/item.repository";
import { InvalidExeption } from "../../exception/custom-exception";

@Injectable()
export class PriceUpdateUseCase {
    constructor(
        private readonly repository: PriceRepository,
        private readonly itemRepository: ItemRepository,
    ) { }

    update(price_id: number, item_id: number, dto: PriceReq) {
        if (!price_id && !item_id) {
            throw new InvalidExeption("Invalid price_id or item_id required");
        }
        if (price_id) {
            return this.updateByPriceId(price_id, dto);
        }

        return this.updateByItemId(item_id, dto)
    }

    async updateByPriceId(price_id: number, dto: PriceReq) {
        if (!price_id) throw new InvalidExeption("Invalid price_id");

        const entity = PriceMapper.toEntity(
            dto.price,
            dto.base_price,
            dto.original_price,
            dto.currency_id
        );
        entity.id = price_id;

        const rsp = await this.repository.update(entity);

        if (rsp.affected == 0) {
            throw new NotFoundException(`price_id ${price_id} not found`)
        }
    }

    async updateByItemId(item_id, priceDto: PriceReq) {
        if (!item_id || item_id <= 0) {
            throw new BadRequestException("Invalid item_id");
        }

        const entity = PriceMapper.toEntity(
            priceDto.price,
            priceDto.base_price,
            priceDto.original_price,
            priceDto.currency_id
        )

        const item = await this.itemRepository.findByIdOptRelations(item_id, { price: true });

        if (!item) {
            throw new NotFoundException("Item not found")
        }

        entity.id = item.price.id;

        await this.repository.update(entity);
    }
}