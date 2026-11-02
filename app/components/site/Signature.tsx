type Props = { label?: string; className?: string };

// Statický zlatý podpis (CSS maska) s občasnou září. Živou verzi, kterou napíše jiskra, má SignatureLive.
export default function Signature({ label = "Podpis Sharky Paul", className = "" }: Props) {
  return (
    <span className={`sig ${className}`.trim()} role="img" aria-label={label}>
      <span className="sig-ink" aria-hidden="true" />
    </span>
  );
}
