import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function App({ children, title }) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            {/* Head digunakann untuk membuat title pada halaman */}
            <Head title={title} />
            <div className="col-md-4">
                <Link href="/">Logo</Link>
                {children}
            </div>
        </div>
    )
}
