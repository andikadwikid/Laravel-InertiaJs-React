import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import App from '../Layouts/App';

export default function Home(props) {
    const username = props.username;
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        Your new Inertia App.
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Home" />;
// Home.layout = (page) => <App {...{ children: page, title: "Home" }} />;

