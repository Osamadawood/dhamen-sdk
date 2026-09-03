import { generatePrimaryScale } from './colorUtils';
import type { FixedTheme, PrimaryScaleField, SdkTheme } from './types';

export const DEFAULT_PRIMARY_500 = '#2d286e';

export const fixedTheme: FixedTheme = {
  background: '#f3f3fa',
  card: '#ffffff',
  textPrimary: '#111928',
  textMuted: '#989898',
  payButton: '#000000',
};

export function createTheme(primary500: string = DEFAULT_PRIMARY_500): SdkTheme {
  return {
    ...fixedTheme,
    ...generatePrimaryScale(primary500),
  };
}

export const defaultTheme = createTheme();

export const primaryScaleFields: PrimaryScaleField[] = [
  { key: 'primary50', label: 'Primary/50', labelAr: 'Primary/50', hintAr: 'خلفية فاتحة' },
  { key: 'primary400', label: 'Primary/400', labelAr: 'Primary/400', hintAr: 'لون ثانوي' },
  { key: 'primary500', label: 'Primary/500', labelAr: 'Primary/500', hintAr: 'لون أساسي' },
];

export function themeToCssVars(theme: SdkTheme): Record<string, string> {
  return {
    '--sdk-primary-50': theme.primary50,
    '--sdk-primary-400': theme.primary400,
    '--sdk-primary-500': theme.primary500,
    '--sdk-primary': theme.primary500,
    '--sdk-primary-light': theme.primary50,
    '--sdk-background': theme.background,
    '--sdk-card': theme.card,
    '--sdk-text-primary': theme.textPrimary,
    '--sdk-text-muted': theme.textMuted,
    '--sdk-pay-button': theme.payButton,
  };
}
