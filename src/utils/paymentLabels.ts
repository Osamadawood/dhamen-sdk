import type { PaymentMethodId } from '../types/paymentMethod';
import { paymentMethods } from '../types/paymentMethod';

export function getSuccessPaymentMethodLabel(method: PaymentMethodId): string {
  return paymentMethods.find((item) => item.id === method)?.label ?? '';
}
