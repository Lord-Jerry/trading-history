import React from 'react'

const TableHead = () => {
    return (
        <tr className="bg-gray-700 text-gray-500">
            <th class="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                Name
            </th>
            <th class="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                Title
            </th>
            <th class="hidden md:flex px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                Status
            </th>
            <th class="px-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                Role
            </th>
            <th class="px-6 py-3"></th>
        </tr>
    )
}

export default TableHead
