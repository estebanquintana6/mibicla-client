import React from "react";
import swal from "sweetalert";

import { TrashIcon } from "@heroicons/react/20/solid";

import axios from "@utils/axios";

const BrandList = ({ brands, fetchBrands }) => {

    const deleteBrand = (name, _id) => {
        swal({
            title: `¿Estás seguro de querer eliminar la marca ${name}?`,
            text: "Esta acción no es reversible",
            icon: "warning",
            buttons: [
                "Cancelar",
                "Eliminar"
            ],
            dangerMode: true,
        }).then(async (confirm) => {
            if (confirm) {
                await axios.delete(`/brands/delete/${_id}`, {
                    headers: {
                        Authorization: localStorage.getItem("user")
                    }
                });
                swal("Éxito", "Categoría eliminada!", "success");
                await fetchBrands();
            }
        });
    }

    return (
        <>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Eliminar
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {brands.map((brand) => {
                            return (
                                <tr className="border-b bg-gray-800 border-gray-700" key={brand._id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {brand.name}
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                        <button
                                            onClick={deleteBrand.bind(this, brand.name, brand._id)}
                                            type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            <TrashIcon className="inline h-[20px]" />
                                        </button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BrandList;