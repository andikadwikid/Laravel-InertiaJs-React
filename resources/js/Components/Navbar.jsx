import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function () {
    return (
        <div>
            {/* Link berfungsi agar halaman page tidak melakukan refresh */}
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
        </div>
    )
}
