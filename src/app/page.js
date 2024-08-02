import React from "react";
import LoginForm from "./login-form/Login-form";
import Header from "./Header/Header";
import EmptyDiv from "./EmptyDiv/EmptyDiv";

const LoginScreen = () => {
  return (
    <div style= {
      {display: 'flex', width: '100%', height: '100dvh', position: 'relative'}}>
      <Header />
      <LoginForm />
      <EmptyDiv />
    </div>
    
  );
}

export default LoginScreen;