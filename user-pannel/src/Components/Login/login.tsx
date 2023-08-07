import React, { useState } from "react";

export const Login = () => {
  type AuthUser = {
    userName?: String;
    password?: Number;
  };

  const access: AuthUser = { userName: "admin", password: 1234 };

  const [userValue, setUserValue] = useState<AuthUser | null>(null);

  const handleBlurUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value)
      setUserValue({ ...userValue, userName: event.target.value });
  };

  const handleBlurPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event)
      setUserValue({ ...userValue, password: Number(event.target.value) });
  };

  const handleClickLoginButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (
      userValue?.userName === access.userName &&
      userValue?.password === access.password
    ) {
      // navigate or dispatch for set mode
    }
  };

  return (
    <div className="container w-2/5 mx-auto my-52 border border-slate-300 p-14 rounded">
      <div className="container columns-3 mb-3">
        <div className="columns-6">
          <label id="username" className="block w-40 text-right p-2">
            نام کاربری :
          </label>
        </div>
        <div className="columns-6">
          <input
            name="username"
            tabIndex={0}
            className="border border-gray-100 border-slate-300 rounded p-2"
            onBlur={handleBlurUserName}
          />
        </div>
      </div>
      <div className="container columns-3 mb-3">
        <div className="columns-6">
          <label className="block w-40 text-right p-2">رمز عبور :</label>
        </div>
        <div className="columns-6">
          <input
            tabIndex={1}
            className="border border-gray-100 border-slate-300 rounded p-2"
            onBlur={handleBlurPassword}
          />
        </div>
      </div>
      <div className="container flex justify-center columns-3 mt-12">
        <button
          tabIndex={2}
          onClick={handleClickLoginButton}
          className="bg-blue-500 hover:bg-blue-700 text-white text-1xl font-bold py-2 px-4 border border-blue-700 rounded w-2/5"
        >
          ورود
        </button>
      </div>
    </div>
  );
};
