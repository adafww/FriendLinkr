import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
//import { loginUser } from '../redux/actions/authActions';

const Login = () => {
//   const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(loginUser({ email, password }));
  };

  const isLoggedIn = true; // проверка, залогинен ли пользователь

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
      <h2 className="login__title form__title">Войдите в аккаунт</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            className="form-control"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Пароль</label>
          <input
            type="password"
            className="form-control"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login__action">
          <button type="submit" className="btn btn-primary">
            Войти
          </button>
          <Link className="login__link" to="/forgot">
            Забыли пароль?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;