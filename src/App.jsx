// @refresh reload
import { Router, Route } from "@solidjs/router";

import Layout from "./components/Layout";
import Home from "./routes";
import About from "./routes/about";

import "./index.css";

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
