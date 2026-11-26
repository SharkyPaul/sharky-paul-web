import type { StepContent } from "../components/StepArticle";

// Transparentní přehled darů: 10 Kč z každého prodaného e-booku → Be Sea (Nadační fond CCBC).
// Aktualizuje se jednou za čtvrtletí. Počty prodejů jen podle Payhipu, nic nevymýšlet.
// Nový řádek přidej na začátek pole.
export type Dar = { obdobi: string; kusy: number | null; castka: number | null; datum: string | null; potvrzeni?: string };

export const dary: Dar[] = [
  { obdobi: "Q4 2026 (od spuštění e-booku)", kusy: null, castka: null, datum: null },
];

function radek(d: Dar) {
  if (d.datum && d.castka !== null) {
    return `${d.obdobi}: ${d.kusy} prodaných e-booků → ${d.castka} Kč odesláno ${d.datum}${d.potvrzeni ? " (potvrzení níže v odkazech)" : ""}`;
  }
  return `${d.obdobi}: první dar odešle Sharky Paul na začátku dalšího čtvrtletí a potvrzení zveřejní tady.`;
}

const celkem = dary.reduce((s, d) => s + (d.datum && d.castka ? d.castka : 0), 0);

export const daryCs: StepContent = {
  lang: "cs",
  url: "https://www.sharkypaul.com/dary",
  altUrl: "/en",
  altLabel: "English",
  homeUrl: "/",
  homeLabel: "Domů",
  eyebrow: "Sharky Paul · Respect the Locals · Dary",
  title: "10 Kč z každého e-booku na ochranu žraloků",
  lead: `Z každého prodaného e-booku Dovolená u moře bez průšvihu posílám 10 Kč organizaci Be Sea, která chrání žraloky. Jednou za čtvrtletí dar odešlu a potvrzení zveřejním na této stránce. Zatím odesláno celkem: ${celkem} Kč.`,
  datePublished: "2026-11-24",
  steps: [
    { title: "Koupíš si e-book", text: "Dovolená u moře bez průšvihu: vybavení, žraloci, proudy, krizové situace, první pomoc u moře a moje nejlepší destinace." },
    { title: "10 Kč jde stranou", text: "Z každého prodaného kusu si 10 Kč odkládám na ochranu žraloků. Částka je pevná, platí i při slevě." },
    { title: "Jednou za čtvrtletí odešlu dar", text: "Na začátku ledna, dubna, července a října spočítám prodeje za předchozí čtvrtletí podle Payhipu a pošlu dar přes Darujme.cz." },
    { title: "Potvrzení najdeš tady", text: "Každý dar zapíšu do přehledu níže i s datem a částkou. Žádné sliby do větru." },
  ],
  signsTitle: "Přehled darů",
  signs: dary.map(radek),
  worksTitle: "Komu pomáháme: Be Sea",
  works: [
    "Be Sea (Nadační fond CCBC) je organizace zaměřená na ochranu oceánů.",
    "V Indonésii bojuje proti obchodu se žraločími ploutvemi a snaží se omezit lov žraloků.",
    "Jedná s vládou, spolupracuje s místními a vzdělává děti.",
    "V Česku šíří povědomí o oceánech, žralocích a udržitelnosti.",
  ],
  faqTitle: "Časté otázky",
  faq: [
    { q: "Proč pevných 10 Kč a ne procenta?", a: "Protože je to jednoduché a ověřitelné. Částka je stejná i při slevovém kódu, takže víš přesně, kolik z tvého nákupu jde žralokům." },
    { q: "Jak si to můžu ověřit?", a: "Každé čtvrtletí sem přidám řádek s počtem prodaných e-booků, částkou a datem daru. Darovat můžeš i sám přímo přes Darujme.cz." },
    { q: "Můžu přispět i bez e-booku?", a: "Jasně. Projekt Be Sea najdeš na Darujme.cz, odkaz je níže." },
  ],
  guideTitle: "Chceš do vody připravený?",
  guideText: "Stáhni si zdarma můj checklist na šnorchlování v Egyptě. A když budeš chtít víc, celý e-book pomůže tobě i žralokům.",
  guideCta: "Checklist zdarma",
  guideUrl: "/egypt",
  relatedTitle: "Přečti si taky",
  related: [
    { label: "Žraloci v Egyptě", url: "/zraloci-v-egypte" },
    { label: "Mýty o žralocích", url: "/myty-o-zralocich" },
  ],
  shareText: "10 Kč z každého e-booku Sharky Paula jde na ochranu žraloků 🦈",
  sourcesTitle: "Odkazy",
  sources: [
    { name: "Be Sea na Darujme.cz (Nadační fond CCBC)", url: "https://www.darujme.cz/projekt/1205750" },
  ],
  disclaimer: "Sharky Paul není spojen s organizací Be Sea, jen ji podporuje darem.",
};
