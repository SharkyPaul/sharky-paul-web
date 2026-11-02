"use client";

import { useEffect } from "react";

// Registrace service workeru: web jde nainstalovat jako aplikace a vybrané stránky fungují i offline.
export default function SWRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
    const register = () => navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {});
    if (document.readyState === "complete") register();
    else window.addEventListener("load", register, { once: true });
  }, []);
  return null;
}
