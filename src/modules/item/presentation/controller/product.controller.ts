import { Controller } from "@nestjs/common";
import { ProductService } from "../../domain/service/product.service";

@Controller()
export class ProductController {

    constructor(private readonly productService: ProductService) {
    }

    getProduct() {
        this.productService.getProduct();
    }
}