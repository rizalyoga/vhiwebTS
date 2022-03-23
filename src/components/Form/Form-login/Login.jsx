import React, { useState } from "react";
import axios from "axios";
import { RiErrorWarningLine } from "react-icons/ri";
import { LoadingBtn } from "../../loading/loading";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  /* ----------------------------- login function ----------------------------- */
  const handleSumbit = async (e) => {
    e.preventDefault();
    const authUser = { email, password };

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
  };

  // {email: 'eve.holt@reqres.in', password: 'cityslicka'}
  /* -------------------------------- component ------------------------------- */

  return (
    <>
      <section className=" wraper mx-2 w-full md:w-5/12 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-xl text-center font-semibold text-gray-700 capitalize dark:text-white">Please Login</h2>
        <h2 className="text-sm text-center font-semibold text-gray-700 capitalize dark:text-white">email: 'eve.holt@reqres.in', password: 'cityslicka'</h2>

        <form onSubmit={handleSumbit}>
          <div className="mt-4">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                Email
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-2">
              <label className=" text-gray-700 dark:text-gray-200" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-slate-900 focus:outline-none focus:bg-gray-600">{loading ? <LoadingBtn /> : <>Save</>}</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
