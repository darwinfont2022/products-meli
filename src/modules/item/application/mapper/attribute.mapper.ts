import { AttributeEntity } from "../../domain/entity/attribute.entity";
import { AttributeReqDto } from "../../presentation/dto/req/attribute-req.dto";
import { IAttributeRes } from "../../presentation/dto/res/attribute-res.dto";

export class AttributeMapper {
    public static toEntity(dto: AttributeReqDto): AttributeEntity {
        let entity: AttributeEntity = new AttributeEntity();
        entity = {
            id: null,
            ...dto,
            item: null,
        };
        return entity;
    }

    public static toEntities(dtos: AttributeReqDto[]): AttributeEntity[] {
        return dtos.map((d) => this.toEntity(d))
    }

    public static toDto(entity: AttributeEntity): IAttributeRes {
        return {
            id: entity.id,
            name: entity.name,
            value_id: entity.value_id,
            value_name: entity.value_name
        }
    }

    public static toDtos(entities: AttributeEntity[]) {
        return entities.map((a) => this.toDto(a))
    }
}