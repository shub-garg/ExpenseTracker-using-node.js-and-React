import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { LoginStyled } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
function Register() {
    const { register } = useGlobalContext();
  const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "", name: "" });



  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(values);
  };


  return (
    <LoginStyled><div className="login">
    <div className="container">
      <h2>Register Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            placeholder="Name"
            name="name" required
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
              
            }
          />
        </div>
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
          Already have an account ?<Link to="/login"> Login</Link>
        </span>
      </form>
    </div>
    </div></LoginStyled>
  );
}

export default Register;