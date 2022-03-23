import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/action/GetUsers";
import CardHome from "../../components/Card/CardHome";
import LoginPage from "../../pages/Login/Login";

const Home = () => {
  const dispatch = useDispatch();
  const tokens = sessionStorage.getItem("token");
  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (tokens) {
      dispatch(getUsers());
    }
  }, [dispatch, tokens]);

  if (!tokens) {
    return <LoginPage />;
  }

  return (
    <div className="mt-20 min-h-[90vh]">
      <div className="wraper mx-auto px-3 lg:px-0 mb-10">
        <CardHome dataUsers={users} />
      </div>
    </div>
  );
};

export default Home;
