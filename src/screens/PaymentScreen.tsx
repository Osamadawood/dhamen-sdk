import { useState } from 'react';
import { CreditCardFlow } from '../components/CreditCardFlow';
import { CountdownTimer } from '../components/CountdownTimer';
import { OrderSummaryCard } from '../components/OrderSummaryCard';
import { PaymentMethodTabs } from '../components/PaymentMethodTabs';
import type { PaymentMethodId } from '../types/paymentMethod';
import { assetUrl } from '../utils/assetUrl';
import './PaymentScreen.css';

function StatusBar() {
  return (
    <div className="payment-screen__status-bar">
      <div className="payment-screen__status-icons">
        <img src={assetUrl('assets/cellular.svg')} alt="" width={19} height={12} />
        <img src={assetUrl('assets/wifi.svg')} alt="" width={17} height={12} />
        <img src={assetUrl('assets/battery.svg')} alt="" width={27} height={13} />
      </div>
      <span className="payment-screen__time">9:41</span>
    </div>
  );
}

export function PaymentScreen({ onPay }: { onPay: (method: PaymentMethodId) => void }) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodId>('apple-pay');

  return (
    <div className="payment-screen" dir="rtl">
      <header className="payment-screen__nav">
        <div className="payment-screen__nav-blur" />
        <StatusBar />
        <div className="payment-screen__nav-content">
          <button type="button" className="payment-screen__back" aria-label="رجوع">
            <svg
              className="payment-screen__back-icon"
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 2L10 10L2 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="payment-screen__nav-title">صفحة الدفع</h1>
        </div>
      </header>

      <main className="payment-screen__content">
        <div className="payment-screen__content-top">
          <PaymentMethodTabs selected={selectedMethod} onSelect={setSelectedMethod} />
          <OrderSummaryCard />

          <div className="payment-screen__method-panel" key={selectedMethod}>
            {selectedMethod === 'credit-card' && <CreditCardFlow />}
          </div>

          <article className="payment-card payment-card--timer">
            <div className="payment-card__timer-row">
              <p className="payment-card__timer-text">تنتهي جلسة الدفع في</p>
              <CountdownTimer minutes={5} seconds={12} size={56} />
            </div>
          </article>
        </div>

        <div className="payment-screen__legal">
          {selectedMethod === 'credit-card' && (
            <img src={assetUrl('assets/dhamen-logo.svg')} alt="dhamen" className="payment-screen__brand" />
          )}
          <div className="payment-card__row">
            <span className="payment-card__label">الرقم الضريبي:</span>
            <span className="payment-card__value">30005658510003</span>
          </div>
          <div className="payment-card__row">
            <span className="payment-card__label">الرقم الوطني الموحد:</span>
            <span className="payment-card__value">7001398960</span>
          </div>
        </div>
      </main>

      <footer className="payment-screen__footer">
        <div className="payment-screen__footer-blur" />
        <div className="payment-screen__total">
          <div className="payment-screen__total-text">
            <p>المبلغ الإجمالي</p>
            <small>شامل ضريبة القيمة المضافة</small>
          </div>
          <div className="payment-screen__amount" dir="ltr">
            <img src={assetUrl('assets/riyal.png')} alt="" className="payment-screen__riyal" />
            <strong>710</strong>
          </div>
        </div>

        {selectedMethod === 'apple-pay' ? (
          <button
            type="button"
            className="payment-screen__pay-button payment-screen__pay-button--apple"
            onClick={() => onPay('apple-pay')}
          >
            <img src={assetUrl('assets/apple-pay.svg')} alt="Apple Pay" className="payment-screen__pay-logo" />
          </button>
        ) : (
          <button
            type="button"
            key={selectedMethod}
            className="payment-screen__pay-button payment-screen__pay-button--primary"
            onClick={() => onPay(selectedMethod)}
          >
            {selectedMethod === 'credit-card'
              ? 'اضافة بيانات البطاقة و الدفع'
              : 'ادفع الآن'}
          </button>
        )}
      </footer>

      <div className="payment-screen__home-indicator" />
    </div>
  );
}
