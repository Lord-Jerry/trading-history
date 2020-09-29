import React from 'react'
import avatar from '../../../assets/images/avatar.webp'

const TableRow = () => {
    return (
        <tr>
            <td class="px-6 py-4 whitespace-no-wrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full bg-gray-500" src={avatar} alt="" />
                    </div>
                    <div class="ml-4">
                        <div class="text-sm leading-5 font-medium text-gray-900">
                            Jane Cooper
                                </div>
                        <div class="text-sm leading-5 text-gray-500">
                            jane.cooper@example.com
                                </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap">
                <div class="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm leading-5 text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 hidden md:inline-flex whitespace-no-wrap">
                <span class="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                Admin
                        </td>
            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                <a href="/" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
        </tr>
    )
}

export default TableRow
