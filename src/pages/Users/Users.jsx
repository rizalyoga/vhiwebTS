import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/action/GetUsers";
import Table from "../../components/Table/Table";

const Users = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="bg-slate-200 flex justify-center items-center" style={{ height: "100vh" }}>
        <h1 className="text-center text-white" style={{ margin: "auto" }}>
          PLEASE WAIT ...
        </h1>
      </div>
    );
  }

  return (
    <div className="mt-20">
      <div className="wraper mx-auto px-3 lg:px-0">
        <Table dataUser={users} />
      </div>
    </div>
  );
};

export default Users;
