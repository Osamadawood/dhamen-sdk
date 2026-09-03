import { useState } from 'react';
import { ColorPanel } from './components/ColorPanel';
import { MobilePreview } from './components/MobilePreview';
import {
  createTheme,
  defaultTheme,
  themeToCssVars,
} from './theme/defaultTheme';
import { PaymentFlow } from './screens/PaymentFlow';
import './App.css';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const updatePrimary = (value: string) => {
    setTheme(createTheme(value));
  };

  return (
    <div className="app-shell">
      <ColorPanel
        theme={theme}
        onPrimaryChange={updatePrimary}
        onReset={() => setTheme(defaultTheme)}
      />

      <MobilePreview title="صفحة الدفع" style={themeToCssVars(theme)}>
        <PaymentFlow />
      </MobilePreview>
    </div>
  );
}

export default App;
