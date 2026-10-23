"use client";

import { useEffect, useState } from "react";
import { messages } from "@/data/messages";
import type { Locale } from "@/lib/locale";

const previewUrl = "https://digital-legacy-five.vercel.app/";

export function ExternalSitePreview({ locale }: { locale: Locale }) {
  const t = messages[locale].preview;
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;

    const timeout = window.setTimeout(() => setStatus("error"), 12000);
    return () => window.clearTimeout(timeout);
  }, [attempt, status]);

  function retry() {
    setStatus("loading");
    setAttempt((current) => current + 1);
  }

  return (
    <div className={`external-preview is-${status}`}>
      {status === "loading" && (
        <div className="external-preview-state" role="status">
          <span className="preview-loading-mark" aria-hidden="true" />
          <strong>{t.loadingTitle}</strong>
          <p>{t.loadingText}</p>
        </div>
      )}

      {status === "error" && (
        <div className="external-preview-state" role="alert">
          <strong>{t.errorTitle}</strong>
          <p>{t.errorText}</p>
          <div>
            <button type="button" onClick={retry}>
              {t.retry}
            </button>
            <a href={previewUrl} target="_blank" rel="noreferrer">
              {t.open}
            </a>
          </div>
        </div>
      )}

      <iframe key={attempt} src={previewUrl} title={t.iframeTitle} loading="lazy" allow="fullscreen" onLoad={() => setStatus("ready")} />
    </div>
  );
}
