import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom" // npm install react-router-dom@6.27.0
import App from "./App.jsx"
import Survey from "./pages/Survey.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
