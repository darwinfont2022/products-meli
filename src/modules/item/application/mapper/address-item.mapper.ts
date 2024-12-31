import { AddresItemEntity } from "../../domain/entity/addres-item.entity";
import { AddresItemReqDto } from "../../presentation/dto/req/addres-item.dto";

export class AddresItemMapper {
    public static toEntity(dto: AddresItemReqDto): AddresItemEntity {
        return {
            id: null,
            ...dto,
        }
    }
}