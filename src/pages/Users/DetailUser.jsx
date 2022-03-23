import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../store/action/GetUserDetail";
import CardUser from "../../components/Card/Card";

const DetailUser = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { userDetail } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [dispatch, id]);

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <CardUser detailUser={userDetail} />
    </div>
  );
};

export default DetailUser;
