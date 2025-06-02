import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Assignemnt } from "./screens/Assignemnt";

// Import Tailwind styles
import "./styles.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Assignemnt />
  </StrictMode>
);