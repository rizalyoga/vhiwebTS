import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const tokens = sessionStorage.getItem("token");
  const navigate = useNavigate();

  /* ----------------------------- logout function ---------------------------- */
  const logOut = () => {
    Swal.fire({
      text: "Are you sure you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#818CF8",
      cancelButtonColor: "#374151",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        document.location.href = "/";
      }
    });
  };

  /* --------------------------- navigation function -------------------------- */
  const toUsers = () => {
    navigate("/users");
  };

  const toHome = () => {
    navigate("/");
  };

  if (!tokens) {
    return <></>;
  } else {
    return (
      <nav className="fixed top-0 bg-gray-300 h-14 w-full flex items-center">
        <div className="row wraper mx-auto px-3 lg:px-0 w-full flex  ">
          <div className="left-col w-9/12 md:w-6/12 flex items-center gap-5">
            <h1 className="font-logo tracking-wider text-gray-700 cursor-pointer font-bold text-xl lg:text-2xl ">Employee</h1>
            <div className="flex list-menu items-center gap-3 lg:mt-2 mt-1 ">
              <button onClick={toHome} className="cursor-pointer hover:text-white active:text-black transition ease-in">
                Home
              </button>
              <button onClick={toUsers} className="cursor-pointer hover:text-white active:text-black transition ease-in">
                Users
              </button>
            </div>
          </div>

          <div className="right-col w-3/12 md:w-6/12 flex justify-end">
            <button className="mt-1 lg:mt-1 hover:text-white active:text-black transition ease-in" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      </nav>
    );
  }
};
export default Navbar;
