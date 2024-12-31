export interface IVariationRes {
    id: number;
    price: number;
    available_quantity: number;
    sold_quantity: number;
    sale_terms: string;
    picture_ids: string[];
    catalog_product_id: string;
}