import React, { useEffect, useState, useRef } from "react";

import Button from "@components/BasicElements/Button";

import axios from "@utils/axios";
import { isNotEmpty, isNotZero } from "@utils/validators";

import swal from 'sweetalert';

const RegisterModal = ({ eventList, setEventList }) => {
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        date: false,
        price: false,
        capacity: false,
        description: false
    });

    const nameRef = useRef();
    const dateRef = useRef();
    const priceRef = useRef();
    const capacityRef = useRef();
    const descriptionRef = useRef();

    const openModal = () => {
        setShowModal(true);
    }

    const createEvent = async () => {
        const { status, data } = await axios.post("/events/register", {
            name: nameRef.current.value,
            date: dateRef.current.value,
            capacity: capacityRef.current.value,
            price: priceRef.current.value
        });

        if (status === 200) {
            setEventList([
                ...eventList,
                data
            ])
        }
    }

    const errorBorder = (err) => err ? "border-red-500" : "";

    const noErrorValidator = () => {
        const err = errors;

        err["name"] = (!isNotEmpty(nameRef.current.value));
        err["date"] = (!isNotEmpty(dateRef.current.value));
        err["capacity"] = (!isNotZero(capacityRef.current.value));
        err["description"] = (!isNotEmpty(descriptionRef.current.value));
        setErrors({ ...err });
        return Object.values(err).every((v) => v == false);
    }

    const handleSubmit = () => {
        const validForm = noErrorValidator();

        if(validForm) {
            createEvent();
            setShowModal(false);
            swal("Éxito", "Evento guardado!", "success");
        }
    }

    useEffect(() => {
        setErrors({
            name: false,
            date: false,
            price: false,
            capacity: false,
            description: false
        });
    }, [showModal])

    return (
        <div>
            <Button small fill onClick={openModal}>Nuevo evento</Button>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[80vw] my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-white">
                                Crear nuevo evento
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
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <form>
                                    <div className="w-full flex xs:flex-col md:flex-row">
                                        <div className="mb-4 xs:w-full md:w-2/4 md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="name">
                                                Nombre del evento
                                            </label>
                                            <input 
                                                className={`block mb-2 text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.name)}`} 
                                                id="name"
                                                type="text"
                                                placeholder="Nombre"
                                                ref={nameRef}
                                            />
                                        </div>
                                        <div className="mb-4 xs:w-full md:w-2/4 md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="date">
                                                Fecha
                                            </label>
                                            <input 
                                                className={`block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.date)}`} 
                                                id="date"
                                                type="date"
                                                placeholder="01/01/2023"
                                                ref={dateRef}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="mb-6 xs:w-2/4 md:w-1/4 xs:mr-2 md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="price">
                                                Precio
                                            </label>
                                            <input 
                                                className={`block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.price)}`} 
                                                id="price"
                                                type="number"
                                                placeholder="0"
                                                ref={priceRef}
                                            />
                                        </div>
                                        <div className="mb-6 xs:w-2/4 md:w-1/4 xs:ml-2 md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="capacity">
                                                Capacidad
                                            </label>
                                            <input
                                                className={`block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.capacity)}`} 
                                                id="capacity" 
                                                type="number" 
                                                placeholder="0"
                                                ref={capacityRef}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="mb-6 w-full md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="description">
                                                Descripción
                                            </label>
                                            <textarea
                                                className={`block text-sm font-medium shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.description)}`}
                                                id="description"
                                                placeholder="Detalles del evento" 
                                                ref={descriptionRef}
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
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default RegisterModal;
