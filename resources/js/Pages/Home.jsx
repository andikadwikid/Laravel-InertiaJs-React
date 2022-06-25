import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import App from '../Layouts/App';

export default function Home(props) {
    const username = props.username;
    return (
        <App title="Home">
            Hello my name is {username}
        </App>
    )
}
