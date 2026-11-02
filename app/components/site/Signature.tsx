type Props = { label?: string; className?: string };

// Pavlův podpis jako zlatá ražba: SVG maska se zlatým přechodem, stín pro 3D a přejíždějící záře.
export default function Signature({ label = "Podpis Sharky Paul", className = "" }: Props) {
  return (
    <span className={`sig ${className}`.trim()} role="img" aria-label={label}>
      <span className="sig-ink" aria-hidden="true" />
    </span>
  );
}
