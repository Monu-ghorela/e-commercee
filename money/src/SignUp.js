import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  let [error, SetError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const authorizaton = localStorage.getItem("user");
    if (authorizaton) {
      navigate("/products");
    }
  });

  const collectData = async () => {
    console.warn(name, password, email);
    if (!name || !email || !password) {
      SetError(true);
      console.warn(error);
      return false;
    }
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/products");    
  };
  return (
    <div className="SignUp">
      <h1>Register</h1>
      <input
        type="text"
        onChange={(e) => Setname(e.target.value)}
        value={name}
        placeholder="enter  ur name"
      />
      {error && !name && <span className="errorhandle">Enter Valid name</span>}

      <input
        type="email"
        onChange={(e) => Setemail(e.target.value)}
        value={email}
        placeholder="enter ur mail id"
      />
      {error && !email && <span className="errorhandle">Enter Valid email</span>}
      <input
        type="Password"
        onChange={(e) => Setpassword(e.target.value)}
        value={password}
        placeholder="enter password"
      />
      {error && !password && (
        <span className="errorhandle">Enter Valid password</span>
      )}
      <button onClick={collectData}>SignUp</button>
    </div>
  );
};
export default SignUp;
