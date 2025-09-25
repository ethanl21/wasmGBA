import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.tailwind.css";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";

document.title = `wasmGBA v${WASMGBA_VERSION}-${import.meta.env.MODE}`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
