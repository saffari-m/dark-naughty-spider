import { createRoot } from "react-dom/client";
// import "./components/button/Button.style.css"
import App from "./App";

import "./style.css";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);