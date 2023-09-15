import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App w-full">
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
