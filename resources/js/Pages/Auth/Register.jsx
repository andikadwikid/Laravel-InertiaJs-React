import React from 'react';
import Guest from '../../Layouts/Guest';
import { Link } from '@inertiajs/inertia-react';

export default function Register() {
    return (
        <Guest title="Register">
            <div className="card">
                <div className="card-header">
                    Register
                </div>
                <div className="card-body">
                    Register form
                </div>
                <div className="card-footer">
                    <Link className="link-dark text-decoration-none" href="/login">Login</Link>
                </div>
            </div>
        </Guest>
    )
}
