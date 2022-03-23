import React from "react";

const Footer = () => {
  const tokens = sessionStorage.getItem("token");

  if (!tokens) {
    return <></>;
  }
  return (
    <div className="w-full py-5 bg-gray-300 h-14 flex justify-center items-center">
      <div className="wraper ">
        <p className="font-logo tracking-wider text-gray-800 text-xl">~ Employee ~</p>
      </div>
    </div>
  );
};

export default Footer;
