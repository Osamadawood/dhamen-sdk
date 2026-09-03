export function assetUrl(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${normalized}`;
}

const elmFonts = [
  { file: 'Elm-Extralight.ttf', weight: 200 },
  { file: 'Elm-Light.ttf', weight: 300 },
  { file: 'Elm-Regular.ttf', weight: 400 },
  { file: 'Elm-Medium.ttf', weight: 500 },
  { file: 'Elm-Bold.ttf', weight: 700 },
] as const;

export function initPublicAssets(): void {
  const fontFaces = elmFonts
    .map(
      ({ file, weight }) => `
@font-face {
  font-family: 'Elm';
  src: url('${assetUrl(`fonts/${file}`)}') format('truetype');
  font-weight: ${weight};
  font-style: normal;
  font-display: swap;
}`,
    )
    .join('\n');

  const style = document.createElement('style');
  style.textContent = `${fontFaces}

:root {
  --asset-credit-card-mask: url("${assetUrl('assets/credit-card.svg')}");
}`;
  document.head.prepend(style);
}
