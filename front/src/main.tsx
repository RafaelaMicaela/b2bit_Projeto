import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from "react-router-dom";




createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
