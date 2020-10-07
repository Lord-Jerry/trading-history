import React from 'react'
import ModalWrapper from '../mini-components/ModalWrapper'

const Modal = ({ hideModal, setHideModal }) => {
    return (
        <ModalWrapper hideModal={hideModal} >  
                {/* <!-- component --> */}
                <div class="bg-gray-50 px-8 pt-6 pb-8 flex flex-col my-2">
                    <h4 className="text-1xl title-font font-medium leading-none text-blue-700 text-center">Create Portfolio</h4>
                    <hr className="my-5"></hr>
                        <div class="-mx-3 md:flex mb-3">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-password">
                                    Portfolio name
                                </label>
                                <input required class="appearance-none block w-full bg-grey-lighter text-gray-800 sm:text-sm sm:leading-5 border border-grey-lighter rounded py-2 px-4 mb-3" id="grid-password" type="text" placeholder="Portfolio name" />
                                <p class="hidde text-red-700 text-xs italic">Portfolio name is required</p>
                            </div>
                        </div>
                        <div class="-mx-3 md:flex mb-6">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-state">
                                    TYPE
                                </label>
                                <div class="relative">
                                    <select required class="form-select block w-full bg-grey-lighter border border-grey-lighter text-gray-800 sm:text-sm sm:leading-5 py-2 pl-4 pr-8 rounded" id="grid-state">
                                    <option>Crypto</option>
                                    <option>Stock</option>
                                    <option>Options</option>
                                    </select>
                                </div>
                            </div>
                            <div class="md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-zip">
                                Amount
                            </label>
                            <input required class="appearance-none block w-full bg-grey-lighter sm:text-sm sm:leading-5 text-gray-800 border border-grey-lighter rounded py-2 px-4" id="grid-zip" type="text" placeholder="Initial amount" />
                            </div>
                        </div>
                        <div class="-mx-3 md:flex md:flex-row-reverse mb-2">
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <button type="submit" class="flex justify-center w-full rounded-md border border-transparent px-6 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    Create Portfolio
                                </button>
                            </div>
                            <div class="md:w-1/2 px-3">
                                <button type="button" onClick={() => setHideModal('hidden')} class="flex justify-center w-full rounded-md border border-gray-300 px-6 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    Cancel
                                </button>
                            </div>
                            
                        </div>
                    </div>
        </ModalWrapper>
    )
}

export default Modal
