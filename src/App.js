import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";








function App() {
  return (
    <div className="App"> 
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

    </Routes>
   
  </div>
);
}


export default App;