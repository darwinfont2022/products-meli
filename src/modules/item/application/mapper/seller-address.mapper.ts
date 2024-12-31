import { SellerAddressEntity } from "../../domain/entity/seller-address.entity";
import { SellerAddressReq } from "../../presentation/dto/req/seller-address.dto";
import { AddresItemMapper } from "./address-item.mapper";
import { SearhLocationMapper } from "./seller-location.mapper";

export class SellerAddressMapper {
    public static toEntity(dto: SellerAddressReq): SellerAddressEntity {
        return {
            id: null,
            city: AddresItemMapper.toEntity(dto.city),
            state: AddresItemMapper.toEntity(dto.state),
            country: AddresItemMapper.toEntity(dto.country),
            search_location: SearhLocationMapper.toEntity(dto.search_location)
        }
    }
}