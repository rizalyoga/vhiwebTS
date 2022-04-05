import React, { useState } from "react";
import axios from "axios";
import { RiErrorWarningLine } from "react-icons/ri";
import { LoadingBtn } from "../../loading/loading";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  /* ----------------------------- handle login function ----------------------------- */
  const handleSumbit = async (e) => {
    e.preventDefault();
    // console.log(password);
    // console.log(email);
    if (password === "cityslicka") {
      const authUser = { email: email.replace(/\s+/g, ""), password: password };

      setLoading(true);
      await axios
        .post("https://reqres.in/api/login", authUser)
        .then((response) => {
          sessionStorage.setItem("token", response.data.token);
          document.location.reload();
        })
        .catch((err) => {
          setErrors(err.response.data.error);
        })
        .finally(() => setLoading(false));
    } else {
      setErrors("Please check your password");
    }
  };

  /* -------------------------------hidden error onFocus ------------------------------ */
  const handlerFocusError = () => {
    setErrors("");
  };

  return (
    <>
      <section className=" wraper w-11/12 md:w-7/12 lg:w-5/12 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="font-logo tracking-widest text-2xl text-center font-semibold text-gray-700 capitalize dark:text-white">Please Login</h2>
        <h2 className="text-center mt-3 text-gray-700 dark:text-white">
          Login acount : <br />
          Email : eve.holt@reqres.in
          <br />
          Pass : cityslicka
        </h2>

        <form onSubmit={handleSumbit}>
          <div className="mt-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                Email
              </label>
              <input
                id="username"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handlerFocusError}
              />
            </div>

            <div className="mt-2 ">
              <label className=" text-gray-700 dark:text-gray-200" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handlerFocusError}
              ></input>
            </div>
          </div>
          <div>
            {errors ? (
              <p className="mt-2 text-red-700 flex items-center gap-1">
                <RiErrorWarningLine /> {errors}
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-gray-600">{loading ? <LoadingBtn /> : <>Login</>}</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
