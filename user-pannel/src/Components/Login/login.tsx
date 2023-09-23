import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../dataBase.json";
import Toastify from "toastify-js";

const Login = () => {
  type AuthUser = {
    userName?: String;
    password?: Number;
  };
  const preDefinedAccess: AuthUser = {
    userName: data.account.userName,
    password: data.account.password,
  };
  const inputPasswordReference = useRef<HTMLInputElement>(null!);
  const loginButtonReference = useRef<HTMLButtonElement>(null!);
  const [userValue, setUserValue] = useState<AuthUser | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBlurUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value)
      setUserValue({ ...userValue, userName: event.target.value });
  };

  const handleBlurPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event)
      setUserValue({
        ...userValue,
        password: Number(event.target.value),
      });
  };

  const handleClickLoginButton = () => {
    if (
      userValue?.userName === preDefinedAccess.userName &&
      userValue?.password === preDefinedAccess.password
    ) {
      navigate("/Profile");
    } else {
      Toastify({
        text: "Username or Password is wrong!",
        duration: 200000,
        newWindow: false,
        close: true,
        gravity: "top",
        position: "left",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        style: {
          width: "400px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "8px",
        },
        offset: {
          x: "10px",
          y: "10px",
        },
      }).showToast();
    }
  };

  const handleKeyUpUserName = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === "Tab") {
      inputPasswordReference.current.focus();
    }
  };

  const handleKeyUpPassword = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === "Tab") {
      loginButtonReference.current.focus();
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
            tabIndex={0}
            name="username"
            className="border border-gray-100 border-slate-300 rounded p-2"
            onBlur={handleBlurUserName}
            autoFocus
            onKeyUp={handleKeyUpUserName}
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
            ref={inputPasswordReference}
            onKeyUp={handleKeyUpPassword}
          />
        </div>
      </div>
      <div className="container flex justify-center columns-3 mt-12">
        <button
          tabIndex={2}
          ref={loginButtonReference}
          onClick={handleClickLoginButton}
          className="bg-blue-500 hover:bg-blue-700 text-white text-1xl font-bold py-2 px-4 border border-blue-700 rounded w-2/5"
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export default Login;
