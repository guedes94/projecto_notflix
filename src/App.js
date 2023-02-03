import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { UserContext } from "./contexts/UserContext";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  const context = useContext(UserContext)

  useEffect(() => {
    
  const getUser = async () => {
    const user = await localStorage.getItem('user')

    context.loggedUser(user)
  }

  getUser()
  }, [])

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