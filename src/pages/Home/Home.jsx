import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/action/GetUsers";
import CardHome from "../../components/Card/CardHome";
import LoginPage from "../../pages/Login/Login";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const tokens = sessionStorage.getItem("token");
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

  const showMore = (e) => {
    e.preventDefault();
    if (page < data.total_pages) {
      setPage((page += 1));
    }
  };

  if (!tokens) {
    return <LoginPage />;
  }

  return (
    <div className="mt-20">
      <div className="wraper mx-auto px-3 lg:px-0">
        <CardHome dataUsers={data} />
        <div className="button w-full flex justify-center">
          <button
            onClick={showMore}
            className="bg-indigo-300 mt-2 mb-5 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mx-1 text-gray-800">Show more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
