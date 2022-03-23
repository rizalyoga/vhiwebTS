import React from "react";
import Cards from "../../components/Card/Card";
import LoginPage from "../../pages/Login/Login";

const Home = () => {
  const tokens = sessionStorage.getItem("token");

  if (!tokens) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="wraper">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
