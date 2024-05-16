import { Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import  Profile  from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<Profile />} />
    </Routes>
  );
};

export default App;
