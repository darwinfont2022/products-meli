import { SearhLocationEntity } from "../../domain/entity/search-location.entity";
import { SearhLocationReqDto } from "../../presentation/dto/req/search-location.dto";
import { AddresItemMapper } from "./address-item.mapper";

export class SearhLocationMapper {
    public static toEntity(dto: SearhLocationReqDto): SearhLocationEntity {
        return {
            id: null,
            city: AddresItemMapper.toEntity(dto.city),
            state: AddresItemMapper.toEntity(dto.city),
            neighborhood: AddresItemMapper.toEntity(dto.neighborhood)
        }
    }
}