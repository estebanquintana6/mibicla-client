import React, { useState, useEffect } from "react";

import RegisterAdmin from "./RegisterAdmin";
import Sidebar from "@components/Admin/Sidebar";

import { getUsers } from "api/users";

const UserPanel = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const { data } = await getUsers();
        setUsers(data);
    }

    useEffect(() => {
        try {
            fetchUsers();
        } catch (e) {
        }
    }, [])

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
            <Sidebar/>
            <RegisterAdmin />

            <div className="p-4 sm:ml-64">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Permisos
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Miembro desde
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            const date = new Date(user.created_at);
                            const dateString = date.toLocaleDateString("es-MX", options);
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={users._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        { user.name }
                                    </th>
                                    <td className="px-6 py-4">
                                        { user.email }
                                    </td>
                                    <td className="px-6 py-4">
                                        { user.role }
                                    </td>
                                    <td className="px-6 py-4">
                                        { dateString }
                                    </td>
                                </tr>
                            );
                    })}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}

export default UserPanel;