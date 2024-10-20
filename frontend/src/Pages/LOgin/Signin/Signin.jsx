import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const collectdata = async (e) => {
    e.preventDefault();

    console.log(name, email, password);

    let result = await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();

    console.log(result);

    if (result.error) {
      // Set error message if credentials are invalid
      setErrorMessage(result.error);
    } else if (result.name) {
      localStorage.setItem('user', JSON.stringify(result));
      navigate('/'); // Navigate to home after successful sign in
    } else {
      // Handle any unexpected errors
      setErrorMessage('Unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="User name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fa-solid fa-envelope"></i>
                <input
                  type="email"
                  className="login__input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                {/* Conditionally render error message */}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
              </div>
              <button className="button login__submit" onClick={collectdata}>
                <span className="button__text">Sign In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
			  <div className='not-have-account'>if you have account <br />  <Link to='/login'>Log in</Link> </div>
            </form>
            <div className="social-login">
              <h3>Sign in via</h3>
              <div className="social-icons">
                <Link to="" className="social-login__icon fab fa-instagram"></Link>
                <Link to="" className="social-login__icon fab fa-facebook"></Link>
                <Link to="" className="social-login__icon fab fa-twitter"></Link>
              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;