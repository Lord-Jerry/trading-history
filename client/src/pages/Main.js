import React from 'react'
import Sidebar from '../components/mini-components/Sidebar'
import AuthNavbar from '../components/AuthNavbar'


const Main = ({children}) => {
    return (
        <>
            <AuthNavbar />
            <div className="container my-1 mx-auto flex flex-row sm:space-x-0 md:space-x-10 px-4">
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default Main
