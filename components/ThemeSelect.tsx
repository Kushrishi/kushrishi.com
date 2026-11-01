"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}

function currentTheme() {
  return document.documentElement.dataset.theme || "system";
}

export function ThemeSelect() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => "system");
  return (
    <select
      className="theme-select"
      aria-label="Colour theme"
      value={theme}
      onChange={(event) => {
        const value = event.target.value;
        document.documentElement.dataset.theme = value;
        try { localStorage.setItem("theme", value); } catch { /* Preference still applies to this page. */ }
        window.dispatchEvent(new Event("theme-change"));
      }}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
