import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleClick = () => {
    console.log(user);

    if (localStorage.getItem("userData")) {
      const local = JSON.parse(localStorage.getItem("userData")) || [];
      const foundUser = local.find(
        (item) =>
          item.userName === user.userName && item.password === user.password
      );

      if (foundUser) {
        alert("Login success");
        window.location.href = "/welcome";
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div>
      <label>userName</label>
      <input
        type={"text"}
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <label>password</label>
      <input
        type={"password"}
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleClick}>submit</button>
      <a href="/register">create account</a>
    </div>
  );
};
