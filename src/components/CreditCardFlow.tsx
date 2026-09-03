import { useState } from 'react';
import { CardFormPanel } from './CardFormPanel';
import { CardSelectionPanel } from './CardSelectionPanel';
import './CreditCardFlow.css';

type CreditCardView = 'select' | 'form';

export function CreditCardFlow() {
  const [view, setView] = useState<CreditCardView>('select');

  return (
    <div className="credit-card-flow">
      <div
        className={`credit-card-flow__view credit-card-flow__view--select${view === 'select' ? ' is-active' : ''}`}
        aria-hidden={view !== 'select'}
      >
        <CardSelectionPanel onAddNew={() => setView('form')} />
      </div>

      <div
        className={`credit-card-flow__view credit-card-flow__view--form${view === 'form' ? ' is-active' : ''}`}
        aria-hidden={view !== 'form'}
      >
        <CardFormPanel onBack={() => setView('select')} />
      </div>
    </div>
  );
}
