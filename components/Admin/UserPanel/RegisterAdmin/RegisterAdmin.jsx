import React, { useState, useRef } from "react";

import Button from "@components/BasicElements/Button";
import { PlusIcon } from "@heroicons/react/20/solid";

import { newAdmin } from "api/users";

const RegisterAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    const emailRef = useRef();

    const openModal = () => {
        setShowModal(true);
    }

    const handleSubmit = async () => {
        const email = emailRef.current.value;
        try {
            const { status, data } = await newAdmin(email);
            console.log(status, data);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex px-4 flex-row-reverse xs:justify-center sm:justify-start">
                <Button small fill className="mt-6" onClick={openModal}>
                    <div className="flex align-middle">
                        <PlusIcon className="inline h-[20px] my-auto mr-1" />
                        Invitar admin
                    </div>
                </Button>
            </div>
            { showModal ? (
                <>
                    <div
                        className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative xs:w-[100vw] sm:w-[80vw] my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                        Invitar nuevo admin
                                    </h3>
                                    <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form>
                                        <div className="w-full flex xs:flex-col md:flex-row flex-wrap">
                                            <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                                    Correo
                                                </label>
                                                <input 
                                                    className={`block mb-2 text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} 
                                                    id="email"
                                                    type="email"
                                                    ref={emailRef}
                                                    placeholder="ejemplo@gmail.com"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-white text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleSubmit()}
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                ) : null
            }   
        </>
    )
}

export default RegisterAdmin;