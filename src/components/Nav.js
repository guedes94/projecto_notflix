import React, { useContext, useEffect } from "react";
import "./Nav.css";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function Nav() {
  const context = useContext(UserContext);
  const navigate = useNavigate()
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  //função de logout
  const logout = () => {
    localStorage.removeItem('user')
    context.logout()
    navigate("/login")
  }

  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      ></img>

      {context.name && (
        <div>
          <h5 style={{ color: "white" }}>{context.name}</h5>
          <button className="logout-button" onClick={logout}>Logout</button>
          <img
            className="nav-avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
            alt="netflixavatarlogo"
          ></img>
        </div>
      )}
    </div>
  );
}

export default Nav;
