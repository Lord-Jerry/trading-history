import React from 'react'
import Navbar from "../../components/Navbar";

const PageWrapper = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container h-full my-16 mx-auto flex flex-col lg:flex-row sm:space-x-0 md:space-x-10">
                {children}
            </div>
        </>
    )
}

export default PageWrapper
