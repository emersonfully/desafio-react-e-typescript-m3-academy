import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import { FaleConosco } from "./pages/FaleConosco";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<FaleConosco />);
