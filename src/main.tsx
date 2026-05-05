import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./theme/ThemeProvider";
import { LangProvider } from "./i18n/LangProvider";

// Console easter egg for fellow nerds peeking at devtools
if (typeof window !== "undefined") {
  // eslint-disable-next-line no-console
  console.log(
    "%cLuis Doudeau %c· dev portfolio\n%cYou're peeking at the console — nice. " +
      "If you're here to chat code or ship something, hit me up: louis.doudo@gmail.com",
    "color:#38bdf8;font-size:18px;font-weight:700;font-family:'Geist',sans-serif",
    "color:#9ca3af;font-size:14px;font-family:monospace",
    "color:#d1d5db;font-size:12px;font-family:monospace"
  );
  // eslint-disable-next-line no-console
  console.log(
    "%cBuilt with React · Vite · Tailwind v4 · Framer Motion · TypeScript",
    "color:#6b7280;font-family:monospace;font-size:11px"
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  </StrictMode>
);
