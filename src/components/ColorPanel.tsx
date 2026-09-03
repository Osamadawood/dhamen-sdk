import type { SdkTheme } from '../theme/types';
import { primaryScaleFields } from '../theme/defaultTheme';
import './ColorPanel.css';

interface ColorPanelProps {
  theme: SdkTheme;
  onPrimaryChange: (value: string) => void;
  onReset: () => void;
}

export function ColorPanel({ theme, onPrimaryChange, onReset }: ColorPanelProps) {
  return (
    <aside className="color-panel" dir="rtl">
      <header className="color-panel__header">
        <div className="color-panel__header-top">
          <p className="color-panel__eyebrow">Dhamen SDK</p>
          <button type="button" className="color-panel__reset" onClick={onReset}>
            إعادة ضبط
          </button>
        </div>
        <h1 className="color-panel__title">تخصيص الألوان</h1>
        <p className="color-panel__subtitle">
          اختر لون Primary/500 وسيتم تحديث Primary/50 و Primary/400 تلقائياً.
        </p>
      </header>

      <section className="color-panel__section">
        <label
          className="color-field color-field--primary"
          style={
            {
              '--field-accent': theme.primary500,
              '--field-tint': theme.primary50,
            } as React.CSSProperties
          }
        >
          <div className="color-field__info">
            <span className="color-field__label">Primary/500</span>
            <span className="color-field__hint">اللون الأساسي</span>
          </div>
          <div className="color-field__controls">
            <input
              type="color"
              value={theme.primary500}
              onChange={(event) => onPrimaryChange(event.target.value)}
              aria-label="Primary/500"
            />
            <input
              type="text"
              className="color-field__hex"
              value={theme.primary500}
              onChange={(event) => onPrimaryChange(event.target.value)}
              spellCheck={false}
            />
          </div>
        </label>
      </section>

      <section className="color-panel__section color-panel__derived">
        <div className="color-panel__section-head">
          <p className="color-panel__section-title">القيم المشتقة</p>
          <span className="color-panel__section-badge">تلقائي</span>
        </div>
        <div className="color-panel__derived-list">
          {primaryScaleFields.map((field) => (
            <div key={field.key} className="derived-color">
              <div className="derived-color__info">
                <span className="derived-color__label">{field.labelAr}</span>
                <span className="derived-color__hint">{field.hintAr}</span>
              </div>
              <div className="derived-color__controls">
                <span className="derived-color__hex">{theme[field.key]}</span>
                <div
                  className="derived-color__swatch"
                  style={{ backgroundColor: theme[field.key] }}
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
