"use client";

import { useState } from "react";

type Props = { url: string; text: string; lang?: "cs" | "en" };

// Sdílecí tlačítka – podporují virální šíření (WhatsApp, Messenger/Facebook, X, nativní sdílení, kopírování).
export default function ShareButtons({ url, text, lang = "cs" }: Props) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(text);
  const L =
    lang === "en"
      ? { share: "Share", copy: "Copy link", copied: "Copied!" }
      : { share: "Sdílej", copy: "Kopírovat odkaz", copied: "Zkopírováno!" };

  const nativeShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: text, text, url });
        return;
      }
    } catch {
      /* uživatel zrušil */
    }
    copy();
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard nedostupný */
    }
  };

  return (
    <div className="share">
      <span className="share-lab">{L.share}:</span>
      <a className="share-btn" href={`https://wa.me/?text=${t}%20${u}`} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
      <a className="share-btn" href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a className="share-btn" href={`https://twitter.com/intent/tweet?text=${t}&url=${u}`} target="_blank" rel="noopener noreferrer">
        X
      </a>
      <button type="button" className="share-btn" onClick={nativeShare}>
        {copied ? L.copied : L.copy}
      </button>
    </div>
  );
}
