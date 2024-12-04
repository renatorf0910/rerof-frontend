import React, { useState } from 'react';
import styles from './Register.module.css';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // redux amamnha
        e.preventDefault();
    }

    return (
        <main className={`${styles['form-signin']} w-100 m-auto`}>
            <form onSubmit={handleSubmit}>
                <img
                    className="mb-4"
                    src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                    alt="Bootstrap logo"
                    width="72"
                    height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                    <input
                        type="name"
                        className="form-control"
                        id="floatingName"
                        placeholder="Your name"
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Name</label>
                </div>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </main>
    )
}

export default Register;