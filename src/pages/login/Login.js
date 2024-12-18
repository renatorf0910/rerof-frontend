import React from 'react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <main className={`${styles['form-signin']} w-100 m-auto`}>
      <form>
        <img
          className="mb-4"
          src="/docs/5.2/assets/brand/bootstrap-logo.svg"
          alt="Bootstrap logo"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Login;
