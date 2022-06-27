import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({ links }) {
    return (

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links.map((link, index) => (
                    <li key={index} className={`page-item ${link.active && 'active '} ${link.url === null && 'disabled'}`}>
                        <Link as="button" disabled={link.url === null ? true : false} className="page-link" key={index} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }} />
                    </li>
                    // <Link key={index} href={link.url} className="btn btn-primary" dangerouslySetInnerHTML={{ __html: link.label }} />
                ))}
            </ul>
        </nav>

    )
}
