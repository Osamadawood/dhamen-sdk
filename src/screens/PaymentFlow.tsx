import { useState } from 'react';
import type { PaymentMethodId } from '../types/paymentMethod';
import { PaymentScreen } from './PaymentScreen';
import { PaymentSuccessScreen } from './PaymentSuccessScreen';

type PaymentStep = 'checkout' | 'success';

export function PaymentFlow() {
  const [step, setStep] = useState<PaymentStep>('checkout');
  const [completedMethod, setCompletedMethod] = useState<PaymentMethodId>('apple-pay');

  const handlePay = (method: PaymentMethodId) => {
    setCompletedMethod(method);
    setStep('success');
  };

  if (step === 'success') {
    return (
      <PaymentSuccessScreen
        method={completedMethod}
        onBack={() => setStep('checkout')}
      />
    );
  }

  return <PaymentScreen onPay={handlePay} />;
}
