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

  const collectdata = (e) => {
    e.preventDefault();

    // Simulate a successful registration
    const user = { name, email }; // Set user info
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/'); // Navigate to home after successful registration
  };

  return (
    <>
      <div className="login-container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={collectdata}>
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
              <button className="button login__submit" type="submit">
                <span className="button__text">Sign In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <div className='not-have-account'>
                If you have an account <br /> <Link to='/login'>Log in</Link>
              </div>
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
