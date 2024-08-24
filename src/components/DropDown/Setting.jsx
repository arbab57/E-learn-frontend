import { React, useRef } from 'react'
import useClickOutside from '../../Hooks/UseClickOutside'


const Setting = ({ setSetting }) => {
    const modalRef = useRef(null)
    const onClose = () => {
        setSetting(false)
    }

    useClickOutside(modalRef, onClose)
    return (
        <div className="flex justify-center items-center  w-screen fixed top-0 left-0 bg-black bg-opacity-40 h-screen">
            <div ref={modalRef} className=" rounded-xl bg-white">

            </div>
        </div>
    )
}

export default Setting