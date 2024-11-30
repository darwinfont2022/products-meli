import { Module } from '@nestjs/common';
import { ProductService } from './domain/service/product.service';
import { ProductController } from './presentation/controller/product.controller';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }
