import type { CSSProperties, ReactNode } from 'react';
import './MobilePreview.css';

interface MobilePreviewProps {
  title: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function MobilePreview({ title, style, children }: MobilePreviewProps) {
  return (
    <section className="mobile-preview">
      <div className="mobile-preview__header">
        <h2>{title}</h2>
        <span className="mobile-preview__badge">393 × 852</span>
      </div>

      <div className="mobile-preview__frame-wrap">
        <div className="phone-frame" style={style}>
          {children}
        </div>
      </div>
    </section>
  );
}
