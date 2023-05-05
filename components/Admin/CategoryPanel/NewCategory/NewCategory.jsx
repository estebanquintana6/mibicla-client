import React, { useRef } from "react";
import swal from "sweetalert";

import axios from "@utils/axios";

const NewCategory = ({ fetchCategories }) => {
    const nameRef = useRef();

    const submitHandle = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', nameRef.current.value);

        const { status } = await axios.post("/category/register", formData, {
            headers: {
                Authorization: localStorage.getItem("user")
            }
        });

        if (status === 200) {
            swal("Éxito", "Categoría guardada!", "success");
            nameRef.current.value = "";
            await fetchCategories();
        } else {
            swal("Error", "Hubo un error, inténtelo más tarde", "error");
        }
    }

    return (
        <>
            <div className="mt-6">
                <form onSubmit={submitHandle}>
                    <div className="w-full flex xs:flex-col md:flex-row flex-wrap mt-4">
                        <div className="mb-4 xs:w-full sm:w-1/2 md:px-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                                Nueva categoría
                            </label>
                            <input
                                className={`block mb-2 text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                id="name"
                                type="text"
                                placeholder="Nombre"
                                ref={nameRef}
                                required
                            />
                        </div>
                        <input
                            className="text-center xs:h-auto md:h-10 md:my-auto py-3 px-8 text-sm font-medium bg-secondary text-gray-100 rounded-xl cursor-pointer sm:mb-0"
                            type="submit"
                        />
                    </div>

                </form>
            </div>
        </>);
}

export default NewCategory;