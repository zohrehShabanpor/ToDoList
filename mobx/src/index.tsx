import { createRoot } from "react-dom/client";
import Application from "./pages";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<Application />);
