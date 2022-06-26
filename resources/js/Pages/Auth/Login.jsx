import { Head, Link, useForm } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../../Layouts/Guest';

export default function Login({ errors }) {

    const { data, setData, post } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const changeHandler = (e) => {
        setData(
            {
                ...data,
                [e.target.id]: e.target.value
            });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        post(route('login'), data)
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input value={data.email} onChange={changeHandler} type="email" name="email" id="email" className="form-control" />
                            {errors && (<div className="text-danger mt-1">{errors.email}</div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={data.password} onChange={changeHandler} type="password" name="password" id="password" className="form-control" />
                            {errors && (<div className="text-danger mt-1">{errors.password}</div>)}
                        </div>
                        <div className="form-check mb-3">
                            <input value={data.remember} onChange={(e) => setData({ ...data, remember: e.target.checked })} type="checkbox" className="form-check-input" name="remember" id="remember" />
                            <label htmlFor="remmeber" className="form-check-label">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
                <div className="card-footer">
                    <span className="text-muted">
                        Doesn't have an account ?
                    </span>{' '}
                    <Link className="link-dark text-decoration-none" href={route('register')}>Register</Link>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <Guest children={page} title="Login" />;

