type Props = { label?: string; className?: string };

// Pavlův podpis: SVG maska, barva se řídí CSS (výchozí písková).
export default function Signature({ label = "Podpis Sharky Paul", className = "" }: Props) {
  return <span className={`sig ${className}`.trim()} role="img" aria-label={label} />;
}
