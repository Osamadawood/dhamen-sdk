import type { PaymentMethodId } from '../types/paymentMethod';
import { getSuccessPaymentMethodLabel } from '../utils/paymentLabels';
import { assetUrl } from '../utils/assetUrl';
import './PaymentScreen.css';
import '../components/OrderSummaryCard.css';
import './PaymentSuccessScreen.css';

interface PaymentSuccessScreenProps {
  method: PaymentMethodId;
  onBack?: () => void;
}

const SADAD_BILL_NUMBER = '6477499930';

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

function CopyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4.5 6.5H3.75C3.05964 6.5 2.5 7.05964 2.5 7.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H12.25C12.9404 17.5 13.5 16.9404 13.5 16.25V15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AmountValue({ value, bold = false }: { value: string; bold?: boolean }) {
  return (
    <div className={`payment-success__amount${bold ? ' payment-success__amount--total' : ''}`} dir="ltr">
      <img src={assetUrl('assets/riyal.png')} alt="" className="payment-success__riyal" />
      {bold ? <strong>{value}</strong> : <span>{value}</span>}
    </div>
  );
}

export function PaymentSuccessScreen({ method, onBack }: PaymentSuccessScreenProps) {
  const paymentLabel = getSuccessPaymentMethodLabel(method);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SADAD_BILL_NUMBER);
    } catch {
      // Clipboard unavailable in preview context.
    }
  };

  return (
    <div className="payment-screen payment-success" dir="rtl">
      <header className="payment-screen__nav">
        <div className="payment-screen__nav-blur" />
        <StatusBar />
        <div className="payment-screen__nav-content">
          <button type="button" className="payment-screen__back" aria-label="رجوع" onClick={onBack}>
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

      <main className="payment-success__content">
        <div className="payment-success__receipt">
          <div className="payment-success__badge" aria-hidden="true">
            <img src={assetUrl('assets/success-tick.svg')} alt="" className="payment-success__badge-icon" />
          </div>

          <article className="payment-success__card">
            <div className="payment-success__headline">
              <h2>تمت العملية بنجاح!</h2>
              <p>تم تأكيد طلبك بنجاح</p>
            </div>

            <div className="payment-success__body">
              <div className="payment-success__columns">
                <div className="payment-success__col-values">
                  <span dir="ltr">23-03-2025</span>
                  <span dir="ltr">#100889</span>
                  <span dir="auto">{paymentLabel}</span>
                </div>
                <div className="payment-success__col-labels">
                  <span>تاريخ الطلب</span>
                  <span>الرقم المرجعي</span>
                  <span>طريقة الدفع</span>
                </div>
              </div>

              {method === 'sadad' && (
                <div className="payment-success__sadad">
                  <div className="payment-success__sadad-label">
                    <span>رقم</span>
                    <img src={assetUrl('assets/sadad.svg')} alt="" className="payment-success__sadad-logo" />
                  </div>
                  <div className="payment-success__sadad-row" dir="ltr">
                    <button
                      type="button"
                      className="payment-success__copy"
                      aria-label="نسخ رقم سداد"
                      onClick={handleCopy}
                    >
                      <CopyIcon />
                    </button>
                    <div className="payment-success__sadad-number">{SADAD_BILL_NUMBER}</div>
                  </div>
                </div>
              )}

              <div className="payment-success__divider payment-success__divider--wide" />

              <div className="payment-success__order">
                <h3>تفاصيل الطلب</h3>
                <div className="payment-success__columns">
                  <div className="payment-success__col-values">
                    <AmountValue value="710" />
                    <AmountValue value="710" bold />
                  </div>
                  <div className="payment-success__col-labels">
                    <span className="payment-success__order-item">خدمة 1</span>
                    <span className="payment-success__order-total">المجموع الكلي</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="payment-success__torn-edge" aria-hidden="true" />
          </article>
        </div>

        <div className="payment-success__legal">
          <img src={assetUrl('assets/dhamen-logo.svg')} alt="dhamen" className="payment-success__brand" />
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

      <div className="payment-screen__home-indicator" />
    </div>
  );
}
