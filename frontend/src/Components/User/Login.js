import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LoginStyled } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";

function Login() {
    const { login } = useGlobalContext();
    const [values, setValues] = useState({ email: "", password: "" });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await login(values);
    };

    const handleGuestLogin = async () => {
        await login({email: "guest@gmail.com", password : "guestlogin"})
    }

  return (
    <LoginStyled className="container">
        <div className="login">
            <div className="container">
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
        <span>
          Don't want to login ?<span onClick={handleGuestLogin} style={{ cursor: 'pointer', color:'blue' }}> Sign in Guest</span>
        </span>
      </form>

      </div>
      <ToastContainer />

      </div>

    </LoginStyled>
    
  );
}


export default Login;