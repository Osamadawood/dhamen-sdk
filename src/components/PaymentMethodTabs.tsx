import type { PaymentMethodId } from '../types/paymentMethod';
import { paymentMethods } from '../types/paymentMethod';
import { assetUrl } from '../utils/assetUrl';
import './PaymentMethodTabs.css';

interface PaymentMethodTabsProps {
  selected: PaymentMethodId;
  onSelect: (method: PaymentMethodId) => void;
}

export function PaymentMethodTabs({ selected, onSelect }: PaymentMethodTabsProps) {
  return (
    <div className="payment-method-tabs" role="tablist" aria-label="طرق الدفع">
      {paymentMethods.map((method) => {
        const isActive = selected === method.id;

        return (
          <button
            key={method.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`payment-method${isActive ? ' payment-method--active' : ''}`}
            onClick={() => onSelect(method.id)}
          >
            {method.id === 'apple-pay' && (
              <img
                src={assetUrl('assets/apple-pay.svg')}
                alt=""
                className="payment-method__icon payment-method__icon--apple"
              />
            )}
            {method.id === 'credit-card' && (
              <span
                className={`payment-method__icon payment-method__icon--card${isActive ? ' payment-method__icon--card-active' : ''}`}
                aria-hidden="true"
              />
            )}
            {method.id === 'sadad' && (
              <img src={assetUrl('assets/sadad.svg')} alt="" className="payment-method__icon" />
            )}
            <span>{method.label}</span>
          </button>
        );
      })}
    </div>
  );
}
