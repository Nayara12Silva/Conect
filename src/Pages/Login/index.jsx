import React,{ useState } from "react";
import { Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logoImg from "../../assets/01.png";
import "./styles.css";

export function LoginPage() {
  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  
  return (
    <div className="container">
        <img src={logoImg} alt="Workflow" className="logoImg" />
      <form className="form">
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="exemplo@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="btn">
          <Login/>
          Entrar
        </button>
        <div className="footer">
          <p>Você nãotem uma conta?</p>
          <Link to="/register">Crie sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
