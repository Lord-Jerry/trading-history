import React from 'react'
import Price from './Price'

const PricePlan = ({ eachPrice }) => {
    return (
        <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-blue-700 flex flex-col relative overflow-hidden">
                {eachPrice.state === null ? "" :
                    <span className="bg-blue-700 text-white px-3 py-2 tracking-widest text-xs absolute right-0 top-0 rounded mt-1 mr-1">
                        {eachPrice.state}
                    </span>
                }


                <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{eachPrice.plan}</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{eachPrice.price}</span>
                    <span className={`${eachPrice.price === "Free" ? "hidden" : ""} text-lg ml-1 font-normal text-gray-500`}>/mo</span>
                </h1>

                {eachPrice.attribute.map(price => <Price key={price} price={price} /> )}


                <button className="flex items-center mt-auto text-white bg-gray-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-600 rounded">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
    )
}

export default PricePlan
