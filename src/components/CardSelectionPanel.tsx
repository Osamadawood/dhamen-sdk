import { useState } from 'react';
import './CardSelectionPanel.css';

const savedCards = [
  { id: 'mastercard', number: 'xxxx-7071', expiry: '08/28', brand: 'mastercard' as const },
  { id: 'visa', number: 'xxxx-3616', expiry: '08/28', brand: 'visa' as const },
  { id: 'mada', number: 'xxxx-1236', expiry: '08/28', brand: 'mada' as const },
];

interface CardSelectionPanelProps {
  onAddNew?: () => void;
}

export function CardSelectionPanel({ onAddNew }: CardSelectionPanelProps) {
  const [selectedCard, setSelectedCard] = useState(savedCards[0].id);

  return (
    <article className="card-selection">
      <div className="card-selection__header">
        <h2>اختر البطاقة</h2>
        <button type="button" className="card-selection__add" onClick={onAddNew}>
          +إضافة بطاقة جديدة
        </button>
      </div>

      <div className="card-selection__list">
        {savedCards.map((card) => {
          const isSelected = selectedCard === card.id;

          return (
            <button
              key={card.id}
              type="button"
              className={`saved-card${isSelected ? ' saved-card--selected' : ''}`}
              onClick={() => setSelectedCard(card.id)}
              dir="ltr"
            >
              <span className="saved-card__radio" aria-hidden="true">
                <span className={`saved-card__radio-dot${isSelected ? ' saved-card__radio-dot--selected' : ''}`} />
              </span>

              <span className="saved-card__details">
                <span className="saved-card__meta">
                  <span className="saved-card__number">{card.number}</span>
                  <span className="saved-card__expiry">{card.expiry}</span>
                </span>
                <img
                  src={`/assets/${card.brand}.svg`}
                  alt=""
                  className={`saved-card__brand saved-card__brand--${card.brand}`}
                />
              </span>
            </button>
          );
        })}
      </div>
    </article>
  );
}
