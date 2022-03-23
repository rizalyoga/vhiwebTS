import React from "react";
import LoginForm from "../../components/Form/Form-login/Login";

const Login = () => {
  return (
    <div className="mx-auto items-center min-h-screen flex flex-col justify-center bg-slate-300">
      <p className="mb-5 border-4 text-gray-700 py-3 px-5 text-4xl font-bold font-logo">WELLCOME !</p>
      <LoginForm />
    </div>
  );
};

export default Login;
