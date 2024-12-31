import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EPaymentMethod } from "./enums-type/payment-method.enum";

@Entity({
    name: "payment_method"
})
export class PaymentMethodEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    accepts_mercadopago: boolean;
    @Column({
        type: "enum",
        enum: EPaymentMethod,
        default: EPaymentMethod.OTHER
    })
    non_mercado_pago_payment_methods: EPaymentMethod;
}