import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import App from '../Layouts/App';

export default function Home(props) {
    const username = props.username;
    return (
        <App title="Home">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Hello my name is {username}
                    </div>
                    <div className="card-body">
                        Hello my name is {username}
                    </div>
                </div>
            </div>
        </App>
    )
}
