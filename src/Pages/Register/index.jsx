import React,{ useState } from "react";
import { Check } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logoImg from "../../assets/01.png";
import "./styles.css";

export function RegisterPage() {
  const[nome, setNome] = useState("");
  const[email, setEmail] = useState("");
  const[telefone, setTelefone] = useState("");
  const[senha, setSenha] = useState("");
  
  return (
    <div className="container">
        <img src={logoImg} alt="Workflow" className="logoImg" />
      <form className="form">
      <div className="inputContainer">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
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
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            value={telefone}
            placeholder ="(00) 00000-00000"
            onChange={(e) => setTelefone(e.target.value)}
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
          <Check/>
          Cadastrar 
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
