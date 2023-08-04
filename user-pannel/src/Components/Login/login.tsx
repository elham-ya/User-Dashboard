import React from 'react';

export const Login = () => {
      const handleClickLoginButton = () => {
            console.log('login');
      };
      return (
            <>
                  <div>
                        <label id="username">نام کاربری :</label>
                        <input className="border border-gray-100"></input>
                  </div>
                  <div>
                        <label>رمز عبور :</label>
                        <input className="border border-gray-100"></input>
                  </div>
                  <button
                        onClick={handleClickLoginButton}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4"
                  >
                        ورود
                  </button>
            </>
      );
};
