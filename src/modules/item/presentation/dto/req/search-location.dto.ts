import { AddresItemReqDto } from "./addres-item.dto";

export class SearhLocationReqDto {
    neighborhood: AddresItemReqDto;
    city: AddresItemReqDto;
    state: AddresItemReqDto;
}