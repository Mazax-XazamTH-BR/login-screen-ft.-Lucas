"use client"; // Adicione esta linha no início do arquivo

import React from "react";
import './login-form.css';

const LoginForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica de envio do formulário
    console.log("Formulário enviado!");
  };

  return (
    <div className="login-form-container">
       <img src="/assets/Default_pfp.svg" className="default__pfp"></img>
      <form onSubmit={handleSubmit}>
        <input
          className="username"
          placeholder="Nome de Usuário"
          required
          type="text"
        />
        <input
          className="password"
          placeholder="Senha"
          type="password"
          required
        />
        <input
          className="login__button"
          type="submit"
          value="Entrar"
        />
      </form>
    </div>
  );
};

export default LoginForm;
