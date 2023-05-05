import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext'
import SocialButton from '../SocialButton/SocialButton';

const Registration = () => {

  const [error,setError] =useState('');

  const {createUser} = useContext(AuthContext);

  const handleRegistration = event =>{
      event.preventDefault();

      const form =event.target;
      const email =form.email.value;
      const password =form.password.value;
      const confirm =form.confirm.value;
      console.log(email,password,confirm);

      setError('');
      if(password !== confirm){
          setError('Your password did not match')
          return
      }

      if(email === '' || password===''){
        setError('Please fill in all the fields')
        return
      }
      
      
      else if(password.length <6){
          setError('password must be 6 characters or longer')
          return
          
      }

      else{
        createUser(email,password)
      .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
      })
      .catch(error=>{
          console.log(error);
          setError(error.message);
          
      })
      
      }
      
      
  }
    return (
        <div>
      <Container>
        <form onSubmit={handleRegistration}>
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
          <label htmlFor="password" className="form-label">
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
          <div>
          <label htmlFor="password" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm"
            id="inputPassword5"
            className="form-control"
            aria-labelledby="passwordHelpBlock"
          />
          </div>
          
          <input className='btn btn-primary' type='submit' value='Register'></input>
        </form>

        <p><small>Have an account? <Link className='text-decoration-none' to='/login'>Login</Link></small></p>
        <p className='text-danger'>{error}</p>
        {/* { error == 'auth/email-already-in-use' ? <p>already registered</p>: {error} } */}
        <SocialButton></SocialButton>
      </Container>
    </div>
    );
};

export default Registration;