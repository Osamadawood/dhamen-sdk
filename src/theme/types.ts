import type { PrimaryScale } from './colorUtils';

export interface FixedTheme {
  background: string;
  card: string;
  textPrimary: string;
  textMuted: string;
  payButton: string;
}

export interface SdkTheme extends PrimaryScale, FixedTheme {}

export interface PrimaryScaleField {
  key: keyof PrimaryScale;
  label: string;
  labelAr: string;
  hintAr: string;
}
