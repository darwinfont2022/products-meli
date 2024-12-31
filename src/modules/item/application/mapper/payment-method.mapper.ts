import { EPaymentMethod } from "../../domain/entity/enums-type/payment-method.enum";
import { PaymentMethodEntity } from "../../domain/entity/payment-method.entity";
import { PaymentMethodRes } from "../../presentation/dto/res/payment-method-res.dto";

export class PaymentMethodMapper {
    public static toEntity(
        accepts_mercadopago: boolean,
        non_mercado_pago_payment_methods: EPaymentMethod,
    ): PaymentMethodEntity {
        return {
            id: null,
            accepts_mercadopago,
            non_mercado_pago_payment_methods
        }
    }

    public static toItemEntity(entity: PaymentMethodEntity): PaymentMethodRes {
        return {
            method_id: entity?.id,
            accepts_mercadopago: entity?.accepts_mercadopago || false,
            non_mercado_pago_payment_methods: entity?.non_mercado_pago_payment_methods || EPaymentMethod.COUPON
        }
    }
}