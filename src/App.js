import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App"> 
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<Signup />} />
      <Route path="/favorites" element={<Favorites />} />

    </Routes>
  </div>
);
}
export default App;