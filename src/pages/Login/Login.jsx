import React, { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import SocialButton from "../SocialButton/SocialButton";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate =useNavigate();
  const location = useLocation();
  console.log(location);

  const from =location.state?.from?.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
        .then(result =>{
      const loggedUser=result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from,{replace:true})

    })
    .catch(error =>{
      console.log(error);
    })
  }
  return (
    <div>
      <Container>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="inputPassword5"
              className="form-control"
              aria-labelledby="passwordHelpBlock"
            />
            <div id="" className="form-text">
              {/* Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji. */}
            </div>
          </div>
          <label htmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="inputPassword5"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
          />
          <div id="" className="form-text">
            {/* Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji. */}
          </div>
          <div></div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Login"
          ></input>
        </form>
        <p>
          <small>
            Create an account?
            <Link className="text-decoration-none" to="/registration">
              Registration
            </Link>
          </small>
        </p>
        <SocialButton></SocialButton>
      </Container>
    </div>
  );
};

export default Login;
