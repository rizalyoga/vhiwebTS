import React from "react";
import { useNavigate } from "react-router-dom";

const CardHome = ({ dataUsers }) => {
  const navigate = useNavigate();
  const toDetail = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="flex flex-wrap md:justify-evenly lg:justify-between">
      {dataUsers?.data?.map((user) => (
        <div key={user.id} className="cursor-pointer w-full md:max-w-xs my-3 bg-white rounded-lg shadow-lg dark:bg-gray-800" onClick={() => toDetail(user.id)}>
          <img className="object-cover rounded-t-md w-full h-56" src={user.avatar} alt="avatar" />
          <div className="py-5 text-center">
            <p className="block text-2xl font-bold text-gray-800 dark:text-white">John Doe</p>
            <span className="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHome;