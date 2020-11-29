import React from 'react';
import ModalWrapper from '../ModalWrapper';

const Modal = ({ hideModal, setHideModal }) => (
    <ModalWrapper hideModal={hideModal}>
        {' '}
        {/* <!-- component --> */}
        <div className="bg-gray-50 px-8 pt-6 pb-8 flex flex-col my-2">
            <h4 className="text-1xl title-font font-medium leading-none text-indigo-700 text-center">
            Create Portfolio
            </h4>
            <hr className="my-5" />
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                  >
                      First Name
                  </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                  />
                    <p className="text-red text-xs italic">Please fill out this field.</p>
              </div>
                <div className="md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                  >
                      Last Name
                  </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                  />
              </div>
          </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-password"
                  >
                      Password
                  </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                  />
                    <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
          </div>
            <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-city"
                  >
                      City
                  </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-city"
                        type="text"
                        placeholder="Albuquerque"
                  />
              </div>
                <div className="md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-state"
                  >
                      State
                  </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                            id="grid-state"
                      >
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                      </select>
                        <div className="pointer-events-none absolute flex items-center px-2 text-grey-darker">
                            <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                      </div>
                  </div>
              </div>
                <div className="md:w-1/2 px-3">
                    <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-zip"
                  >
                      Zip
                  </label>
                    <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                  />
              </div>
          </div>
            <div className="-mx-3 md:flex md:flex-row-reverse mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                    <button
                        type="button"
                        className="flex justify-center w-full rounded-md border border-transparent px-6 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                      Deactivate
                  </button>
              </div>
                <div className="md:w-1/2 px-3">
                    <button
                        type="button"
                        onClick={() => setHideModal('hidden')}
                        className="flex justify-center w-full rounded-md border border-gray-300 px-6 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                      Cancel
                  </button>
              </div>
          </div>
      </div>
  </ModalWrapper>
);

export default Modal;
