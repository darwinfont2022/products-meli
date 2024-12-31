import { AddresItemReqDto } from "./addres-item.dto";
import { SearhLocationReqDto } from "./search-location.dto";

export class SellerAddressReq {
    city: AddresItemReqDto;
    state: AddresItemReqDto;
    country: AddresItemReqDto;
    search_location: SearhLocationReqDto;
}