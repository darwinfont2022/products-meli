import { Module } from "@nestjs/common";
import { ItemLoadUseCase } from "./use-case/item/item-load.use-case";
import { ItemCreateUseCase } from "./use-case/item/item-create.use-case";
import { DomainModule } from "../domain/domain.module";
import { PriceCreateUseCase } from "./use-case/price/price-create.use-case";
import { StockUseCase } from "./use-case/stock/stock.use-case";
import { ItemUpdateUseCase } from "./use-case/item/item-update.use-case";
import { PriceLoadUseCase } from "./use-case/price/price-load.use-case";
import { PriceUpdateUseCase } from "./use-case/price/price-update.use-case";
import { PriceDeleteUseCase } from "./use-case/price/price-delete.use-case";

@Module(
    {
        imports: [DomainModule],
        providers: [
            ItemLoadUseCase, ItemCreateUseCase, ItemUpdateUseCase,
            PriceCreateUseCase, PriceLoadUseCase, PriceUpdateUseCase, PriceDeleteUseCase,
            StockUseCase
        ],
        exports: [ItemLoadUseCase, ItemCreateUseCase, ItemUpdateUseCase,
            PriceCreateUseCase, PriceLoadUseCase, PriceUpdateUseCase, PriceDeleteUseCase
        ]
    }
)
export class ApplicationModule {
}