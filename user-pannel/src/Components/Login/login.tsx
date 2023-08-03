import React from 'react';

export const Login = () => {
      const handleClickLoginButton = () => {
            console.log('login');
      };
      return (
            <>
                  <div>
                        <label id="username">نام کاربری :</label>
                        <input></input>
                  </div>
                  <div>
                        <label>رمز عبور :</label>
                        <input></input>
                  </div>
                  <button onClick={handleClickLoginButton}>ورود</button>
            </>
      );
};
