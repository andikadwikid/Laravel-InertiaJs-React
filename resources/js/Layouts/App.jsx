import { Head, usePage } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../Components/Navbar'

export default function App({ children, title }) {

    const { flash } = usePage().props

    // useEffect(() => {
    //     flash.type && toast[flash.type](flash.message)
    // }, [])

    flash.type && toast[flash.type](flash.message)

    return (
        <div className=''>
            {/* Head digunakann untuk membuat title pada halaman */}
            <Head title={title} />
            <Navbar />
            <div className="pt-4">
                <Toaster position="bottom-right" />
                {children}
            </div>
        </div>
    )
}
