import React from 'react'
import Header from '../components/Layout/Header'
import { Outlet } from 'react-router-dom'

const mainlayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default mainlayout