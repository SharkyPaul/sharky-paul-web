import { SIGNATURE_LIVE_SVG } from "./signatureSvg";

type Props = { label: string; className?: string };

// Úvodní podpis: jiskra ho napíše tah po tahu, po dopsání přejede záře.
// Animace je přímo v SVG (SMIL), takže běží i bez JavaScriptu. Jen pro serverové komponenty – SVG nechceme v klientském balíku.
export default function SignatureLive({ label, className = "" }: Props) {
  return <span className={`sig-live ${className}`.trim()} role="img" aria-label={label} dangerouslySetInnerHTML={{ __html: SIGNATURE_LIVE_SVG }} />;
}
