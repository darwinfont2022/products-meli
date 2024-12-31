import { EPaymentMethod } from "src/modules/item/domain/entity/enums-type/payment-method.enum";

export interface PaymentMethodRes {
    method_id: number;
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: EPaymentMethod;
}