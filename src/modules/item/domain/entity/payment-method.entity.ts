import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "payment_method"
})
export class PaymentMethodEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    accepts_mercadopago: boolean;
    @Column()
    non_mercado_pago_payment_methods: string; // Could be enum?
}