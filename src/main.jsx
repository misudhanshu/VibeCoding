import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { ProgressProvider } from "./context/ProgressContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ProgressProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProgressProvider>
    </ThemeProvider>
  </StrictMode>,
);
