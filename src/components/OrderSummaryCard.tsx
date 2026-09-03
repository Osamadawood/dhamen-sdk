import './OrderSummaryCard.css';

export function OrderSummaryCard() {
  return (
    <article className="payment-card">
      <div className="payment-card__header">
        <h2>سداد</h2>
        <img src="/assets/tamm-logo.svg" alt="Tamm" className="payment-card__logo" />
      </div>
      <div className="payment-card__row">
        <span className="payment-card__label">الجهة</span>
        <span className="payment-card__value">شركة علم</span>
      </div>
      <div className="payment-card__row">
        <span className="payment-card__label">رقم الطلب</span>
        <span className="payment-card__value">#7893902</span>
      </div>
    </article>
  );
}
