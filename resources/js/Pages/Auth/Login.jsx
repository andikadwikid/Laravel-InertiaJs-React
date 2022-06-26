import { Head, Link } from '@inertiajs/inertia-react';
import React from 'react';
import Guest from '../../Layouts/Guest';

export default function Login() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Login
                </div>
                <div className="card-body">
                    Login form
                </div>
                <div className="card-footer">
                    <Link className="link-dark text-decoration-none" href="/register">Register</Link>
                </div>
            </div>
        </>
    );
}
Login.layout = (page) => <Guest children={page} title="Login" />;

