"use client";

import { useEffect, useState } from "react";

const previewUrl = "https://digital-legacy-five.vercel.app/";

export function ExternalSitePreview() {
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
          <strong>Loading project preview</strong>
          <p>The interactive site will appear here.</p>
        </div>
      )}

      {status === "error" && (
        <div className="external-preview-state" role="alert">
          <strong>Preview unavailable</strong>
          <p>The project can still be opened in a new tab.</p>
          <div>
            <button type="button" onClick={retry}>Try again</button>
            <a href={previewUrl} target="_blank" rel="noreferrer">Open project</a>
          </div>
        </div>
      )}

      <iframe
        key={attempt}
        src={previewUrl}
        title="Interactive preview of the Digital Legacy project"
        loading="lazy"
        allow="fullscreen"
        onLoad={() => setStatus("ready")}
      />
    </div>
  );
}
