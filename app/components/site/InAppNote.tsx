"use client";

import { useEffect, useState } from "react";

// Vestavěný prohlížeč TikToku / Instagramu / Facebooku často neumí stahovat soubory.
export default function InAppNote({ text }: { text: string }) {
  const [inApp, setInApp] = useState(false);
  useEffect(() => {
    const ua = navigator.userAgent || "";
    setInApp(/TikTok|musical_ly|Bytedance|BytedanceWebview|Instagram|FBAN|FBAV|FB_IAB/i.test(ua));
  }, []);
  if (!inApp) return null;
  return <p className="guide-note">{text}</p>;
}
