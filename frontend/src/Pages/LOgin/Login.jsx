import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
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

	const login = (e) => {
		e.preventDefault();
		
		// Simulate a successful login
		const user = { name: 'User', email }; // Set user info
		localStorage.setItem('user', JSON.stringify(user));
		navigate('/'); // Redirect after login
	};

	return (
		<>
			<div className="login-container container ">
				<div className="screen">
					<div className="screen__content">
						<form className="login" onSubmit={login}>
							<div className="login__field">
								<i className="login__icon fa-solid fa-envelope"></i>
								<input
									type='email'
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
							</div>
							<button className="button login__submit">
								<span className="button__text">Log In Now</span>
								<i className="button__icon fas fa-chevron-right"></i>
							</button>

							<div className='not-have-account'>
								If you don't have an account <Link to='/signin'>Sign in</Link>
							</div>
						</form>
						<div className="social-login">
							<h3>Log in via</h3>
							<div className="social-icons">
								<Link to='' className="social-login__icon fab fa-instagram"></Link>
								<Link to='' className="social-login__icon fab fa-facebook"></Link>
								<Link to='' className="social-login__icon fab fa-twitter"></Link>
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

export default Login;
