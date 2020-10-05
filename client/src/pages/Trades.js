import React, { useState } from 'react';
import Trade from '../components/Trade'
import Pagination from '../components/mini-components/Pagination'
import Tabs from '../components/Tabs'


const Main = () => {
  const [hideModal, setHideModal] = useState('hidden')
  const [dropModal, setDropModal] = useState(false)

  const toggleDropModal = (a) => {
    dropModal ? setHideModal('hidden') : setHideModal('')
    setDropModal(!dropModal)
    console.log('modal', dropModal)
  }

  return (
    <>
                <h4 className="text-xl title-font font-medium leading-none text-indigo-700 mt-8 mb-5">TRADES</h4>
                <div className="mx-auto bg-white w-full h-full  rounded-lg shadow borde">
                    <Tabs />
                    <Trade toggleDropModal={toggleDropModal} />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Trade />
                    <Pagination ></Pagination>
                </div>

    </>
  )
}

export default Main
