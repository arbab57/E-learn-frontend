import React, { useEffect, useState } from 'react'
import { FaStar, FaUser, FaTrash } from "react-icons/fa";
import { WebHandler } from '../data/remote/WebHandler';
import { URLS } from '../data/remote/URL';
import Toast from './General/Toast';


const Review = ({ review, index, courseId ,setDelRev }) => {

    const [owner, setOwner] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const [severity, setSeverity] = useState("")
    const [deleteRes, setDeleteRes] = useState("")


    useEffect(() => {
        const verifyOwner = async () => {
            const { response, status } = await WebHandler(
                `${URLS.VERIFYREVIEW}${courseId}/review/${review._id}`, 'GET'
            );
            console.log(status)
            if (status === 200) {
                setOwner(true);
            }
        };
        verifyOwner()
    }, [])

    const deleteReview = async () => {
        const { response, status } = await WebHandler(`${URLS.DELETEREVIEW}${courseId}`, 'DELETE')
        if (status === 201) {
            setDeleteRes(response.message)
            setShowToast(true)
            setSeverity("success")
            setDelRev(true)
        }
    }


    return (
        <>
            {showToast && (
                <Toast message={deleteRes} severity={severity} onClose={() => setShowToast(false)} />
            )}
            <div
                key={index}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg"
            >
                <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <p className="font-semibold">{review?.user?.name}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span className="text-sm text-gray-600">{review?.rating}</span>
                    </div>
                    {/* Delete Button */}
                    {owner && <button
                        className="ml-auto text-red-500 hover:text-red-700"
                        onClick={() => deleteReview(review?._id)}
                    >
                        <FaTrash />
                    </button>}
                </div>
                <p className="mt-2 text-gray-700">{review?.review}</p>
            </div>
        </>
    )
}

export default Review