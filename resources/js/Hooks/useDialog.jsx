import { Modal } from 'bootstrap'
import React, { useRef } from 'react'

export default function useDialog() {
    const modalAdd = useRef(null)

    return [
        open = () => {
            new Modal(modalAdd.current).show()
        },
        close = () => {
            Modal.getInstance(modalAdd.current).hide()
        },
        modalAdd,
    ]
}
