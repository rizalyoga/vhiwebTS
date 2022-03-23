import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const tokens = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const hidden = "";

  /* ----------------------------- logout function ---------------------------- */
  const logOut = () => {
    sessionStorage.clear();
    document.location.href = "/";
  };

  const toUsers = () => {
    navigate("/users");
  };

  const toHome = () => {
    navigate("/");
  };

  const showMenu = () => {
    setVisible((show) => !show);
    if (visible) {
      hidden = "hidden";
    } else {
      hidden = "";
    }
  };

  if (!tokens) {
    return <></>;
  } else {
    return (
      <nav className="fixed top-0 bg-gray-300 h-14 w-full flex items-center">
        <div className="row wraper mx-auto px-3 lg:px-0 w-full flex  ">
          <div className="left-col w-6/12 flex items-center gap-5">
            <h1 className="cursor-pointer font-bold text-xl lg:text-2xl ">Employee</h1>
            <div className="hidden md:flex list-menu items-center gap-3 mt-1">
              <p onClick={toHome} className="cursor-pointer hover:text-white active:text-black transition ease-in">
                Home
              </p>
              <p onClick={toUsers} className="cursor-pointer hover:text-white active:text-black transition ease-in">
                Users
              </p>
            </div>
          </div>

          <div className="right-col w-6/12 flex justify-end">
            <button className="lg:mt-1 hover:text-white active:text-black transition ease-in" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
