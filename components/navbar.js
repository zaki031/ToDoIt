import React from "react";

const navbar = () => {
  return (
    <div className="flex justify-between w-full p-4 shadow-sm">
      <a className="text-2xl">ToDo It</a>

      <div className="justify-between flex gap-[50px] links">
        <a href="/login" className="text-xl">
          Login
        </a>
        <a href="/signin" className="p-2 px-3 text-white shadow-md rounded-xl bg-main hover:bg-transpaent ">
          Sign in
        </a>
      </div>
    </div>
  );
};

export default navbar;
