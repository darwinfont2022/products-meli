export class ProductDto {
    id: number;
    mlb_id: string;
    title: string;
    seller_id: string;
    category_id: string;
    official_store_id: number;
    price: number;
    base_price: number;
    original_price: number;
    currency_id: number;
    initial_quantity: number;
    available_quantity: number;
    sold_quantity: number; //Somente disponível com token proprietário
    buying_mode: string; // this is a enum
    listing_type_id: string; // enum
    start_time: string;  //Somente disponível com token proprietário
    historical_start_time: string;//Somente disponível com token proprietário
    stop_time: string; //Somente disponível com token proprietário
    condition: string; // enum
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    video_id: string;
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: string; // Could be enum?
    international_delivery_mode: string;
    // seller_address: SellerAddress;
    seller_contact: string;
    location: string;
    // coverage_areas: string[];
    // attributes: AttributeEntity[];
    listing_source: string;
    // variations: VariationEntity[];
    status: string; // enum status;
    // sub_status: string[];
    // tags: string[];
    warranty: string;// enum
    catalog_product_id: string;
    domain_id: string;
    parent_item_id: string
    // deal_ids: string[];
    automatic_relist: boolean;
    date_created: string;
    last_updated: string;
    total_listing_fee: number;
    health: number;
    catalog_listing: boolean;
    channels: string[];//Somente disponível com token proprietário
    bundle: string;
}