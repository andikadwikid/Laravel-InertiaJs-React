import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import App from '../Layouts/App'

export default function Dashboard() {
    return (
        <App title="Dashboard">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Dashboard
                    </div>
                    <div className="card-body">
                        Your Dashboard
                    </div>
                </div>
            </div>
        </App>
    )
}
