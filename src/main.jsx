import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PricingComparison from "../page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PricingComparison />
  </StrictMode>
);
