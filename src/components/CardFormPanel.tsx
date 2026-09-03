import './CardFormPanel.css';

interface CardFormPanelProps {
  onBack: () => void;
}

export function CardFormPanel({ onBack }: CardFormPanelProps) {
  return (
    <article className="card-form" dir="rtl">
      <div className="card-form__top-row">
        <div className="card-form__networks" dir="ltr">
          <img src="/assets/payment-icon.svg" alt="" className="card-form__network card-form__network--visa" />
          <span className="card-form__network card-form__network--mastercard">
            <img src="/assets/mastercard.svg" alt="" />
          </span>
          <span className="card-form__network card-form__network--mada">
            <img src="/assets/mada.svg" alt="" />
          </span>
        </div>

        <button type="button" className="card-form__back" onClick={() => onBack()}>
          البطاقات المحفوظة ←
        </button>
      </div>

      <div className="card-form__title-row">
        <span className="card-form__title-icon" aria-hidden="true" />
        <h2>معلومات البطاقة</h2>
      </div>

      <div className="card-form__fields">
        <label className="card-form__field">
          <span className="card-form__label">
            رقم البطاقة
            <span className="card-form__required">*</span>
          </span>
          <span className="card-form__input card-form__input--card-number" dir="ltr">
            <img src="/assets/camera.svg" alt="" className="card-form__camera" />
            <input type="text" inputMode="numeric" placeholder="1234 - 5678 - 1234 - 5678" />
          </span>
        </label>

        <label className="card-form__field">
          <span className="card-form__label">
            الاسم
            <span className="card-form__required">*</span>
          </span>
          <span className="card-form__input">
            <input type="text" placeholder="Rand Almansour" />
          </span>
        </label>

        <div className="card-form__row">
          <label className="card-form__field card-form__field--expiry">
            <span className="card-form__label">
              تاريخ انتهاء البطاقة
              <span className="card-form__required">*</span>
            </span>
            <span className="card-form__input">
              <input type="text" inputMode="numeric" placeholder="يوم / شهر" />
            </span>
          </label>

          <label className="card-form__field card-form__field--cvv">
            <span className="card-form__label">
              رمز الأمان CVV
              <span className="card-form__required">*</span>
            </span>
            <span className="card-form__input">
              <input type="text" inputMode="numeric" placeholder="123" dir="ltr" />
            </span>
          </label>
        </div>
      </div>
    </article>
  );
}
