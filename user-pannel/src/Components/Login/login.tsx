import React from "react";

export const Login = () => {
  const handleClickLoginButton = () => {
    console.log("login");
  };
  return (
    <div className="flex flex-col justify-center items-center w-2/5 mx-auto my-52 border border-slate-300 p-16">
      <div className="">
        <label id="username" className="text-center">
          نام کاربری :
        </label>
        <input
          tabIndex={0}
          className="border border-gray-100 border-slate-300"
        ></input>
      </div>
      <div>
        <label className="text-center">رمز عبور :</label>
        <input
          tabIndex={1}
          className="border border-gray-100 mt-11 border-slate-300"
        ></input>
      </div>
      <button
        tabIndex={2}
        onClick={handleClickLoginButton}
        className="bg-blue-500 hover:bg-blue-700 text-white text-1xl font-bold py-2 px-4 border border-blue-700 rounded mt-10 w-2/5"
      >
        ورود
      </button>
    </div>
  );
};
