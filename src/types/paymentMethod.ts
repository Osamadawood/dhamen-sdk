export type PaymentMethodId = 'apple-pay' | 'credit-card' | 'sadad';

export const paymentMethods: {
  id: PaymentMethodId;
  label: string;
}[] = [
  { id: 'apple-pay', label: 'Apple Pay' },
  { id: 'credit-card', label: 'بطاقة ائتمان' },
  { id: 'sadad', label: 'سداد' },
];
