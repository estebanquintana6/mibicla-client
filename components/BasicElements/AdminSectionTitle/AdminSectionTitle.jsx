import React from "react";

const AdminSectionTitle = ({ title }) => {
    return (
        <div class="flex">
            <div className="w-full bg-gray-800 h-full flex">
                <h2 className='text-4xl font-extrabold text-center mx-auto mb-1 text-white p-5'>{ title }</h2>
            </div>
        </div>
    )
}

export default AdminSectionTitle;