import { useState } from 'react';
import type { SdkTheme } from '../theme/types';
import { primaryScaleFields } from '../theme/defaultTheme';
import './ColorPanel.css';

interface ColorPanelProps {
  theme: SdkTheme;
  onPrimaryChange: (value: string) => void;
  onReset: () => void;
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

export function ColorPanel({ theme, onPrimaryChange, onReset }: ColorPanelProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyValue = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 1500);
    } catch {
      // Clipboard unavailable in some preview contexts.
    }
  };

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
                <div className="derived-color__hex-group">
                  <span className="derived-color__hex">{theme[field.key]}</span>
                  <button
                    type="button"
                    className={`derived-color__copy${copiedKey === field.key ? ' derived-color__copy--copied' : ''}`}
                    aria-label={`نسخ ${field.labelAr}`}
                    onClick={() => copyValue(field.key, theme[field.key])}
                  >
                    {copiedKey === field.key ? 'تم' : <CopyIcon />}
                  </button>
                </div>
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
