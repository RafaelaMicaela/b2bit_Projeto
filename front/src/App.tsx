import { Routes, Route } from "react-router-dom";
import "./index.css"
import { Login } from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default App;