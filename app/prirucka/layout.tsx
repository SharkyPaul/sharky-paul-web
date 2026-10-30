import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Příručka Prevence – stažení",
  robots: { index: false, follow: true },
  alternates: { canonical: "/downloads/sharky-paul-prevence-zraloci.pdf" },
};

export default function PriruckaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
