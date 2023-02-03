import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "./Login.css";

function Login() {
const context = useContext(UserContext)
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
    permission: 0,
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const url = "http://localhost:5000";

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `${url}/users`,
      { ...users },
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        console.log("users:", users);
        console.log("formData:", formData);

        if (
          users.some(
            (user) =>
              user.username === formData.email &&
              user.password === formData.password
          )
        ) {
            
            //Caso utilizador exista
            console.log("Existe!");
            //Filtramos os uitlizadores todos para receber o utilizador especifico
          const userData = users.filter(
            (user) =>
              user.username === formData.email &&
              user.password === formData.password
          );
        // Validar dados de utilizar
          console.log(userData[0]);
          //Guardamos o nome na localStorage
          localStorage.setItem("user", userData[0].name);
          context.loggedUser(userData[0].name)
        //Navegamos para a home
          navigate("/")
          return 
        }

        // Caso utilizador não exista
        // Modificamos o estado do erro para ser apresentado ao utilizador
        setError("Utilizador ou password errados!")
        return console.log("Não Existe!");
      });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="login-form-wrapper">
      <h1>Login Form</h1>
      {error &&  <p className="error">{error}</p>}
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
