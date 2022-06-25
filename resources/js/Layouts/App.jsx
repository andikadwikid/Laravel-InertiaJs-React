import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Navbar from '../Components/Navbar'

export default function App({ children, title }) {
    return (
        <div>
            {/* Head digunakann untuk membuat title pada halaman */}
            <Head title={title} />
            <Navbar />
            {children}
        </div>
    )
}
