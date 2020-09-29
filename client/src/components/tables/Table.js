import React from 'react'
import TableHead from './components/TableHead'
import TableRow from './components/TableRow'
import avatar from '../../assets/images/avatar.webp'


const Table = () => {
    return (
      <div className="container my-16 mx-auto flex flex-row space-x-10 sm:px-4">
        <div className="hidden md:flex flex-col items-center lg:w-2/8 py-10 px-5 bg-white shadow border-gray-500 sm:rounded-lg h-56">
          <img class="h-24 w-24 rounded-full bg-gray-500" src={avatar} alt="" />
          <div class="text-sm leading-5 font-medium text-gray-900">
            Jane Cooper
          </div>
          <div class="text-sm leading-5 text-gray-500">
            jane.cooper@example.com
          </div>
        </div>

        <div className="flex flex-row sm:w-full lg:w-6/8  overflow-hidden">
          <div className="flex-col  min-w-full -my-2 overflow-x-auto">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <TableHead />
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Table
