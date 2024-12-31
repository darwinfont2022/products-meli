import { CombinationEntity } from "../../domain/entity/combination.entity"
import { CombinationReqDto } from "../../presentation/dto/req/combination.dto"

export class CombinationMapper {
    public static toEntity(dto: CombinationReqDto): CombinationEntity {
        return {
            id: null,
            ...dto,
            variation: null
        }
    }

    public static toEntities(dtos: CombinationReqDto[]): CombinationEntity[] {
        return dtos.map(dto => this.toEntity(dto))
    }
}