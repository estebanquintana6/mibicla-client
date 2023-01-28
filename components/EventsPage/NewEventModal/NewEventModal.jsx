import React, { useEffect, useState, useRef } from "react";

import Button from "@components/BasicElements/Button";

import axios from "@utils/axios";
import swal from 'sweetalert';

import { isNotEmpty, isNotZero } from "@utils/validators";

import { PlusIcon } from "@heroicons/react/20/solid";

const RegisterModal = ({ eventList, setEventList }) => {
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        date: false,
        price: false,
        capacity: false,
        distance: false,
        description: false
    });
    const [tags, setTags] = useState([]);

    const nameRef = useRef();
    const dateRef = useRef();
    const placeRef = useRef();
    const priceRef = useRef();
    const distanceRef = useRef();
    const capacityRef = useRef();
    const descriptionRef = useRef();
    const tagRef = useRef();

    const openModal = () => {
        setShowModal(true);
    }

    const createEvent = async () => {
        try {
            const { status, data } = await axios.post("/events/register", {
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                place: placeRef.current.value,
                date: dateRef.current.value,
                capacity: capacityRef.current.value,
                distance: distanceRef.current.value,
                price: priceRef.current.value,
                tags: tags
            });

            if (status === 200) {
                setEventList([
                    ...eventList,
                    data
                ])
                swal("Éxito", "Evento guardado!", "success");
            }
        } catch({ message }) {
            swal("Error", "Hubo un error, inténtelo más tarde" , "error");
        }
    }

    const errorBorder = (err) => err ? "border-red-500" : "";

    const noErrorValidator = () => {
        const err = errors;

        err["name"] = (!isNotEmpty(nameRef.current.value));
        err["date"] = (!isNotEmpty(dateRef.current.value));
        err["place"] = (!isNotEmpty(placeRef.current.value));
        err["capacity"] = (!isNotZero(capacityRef.current.value));
        err["distance"] = (!isNotEmpty(distanceRef.current.value));
        err["description"] = (!isNotEmpty(descriptionRef.current.value));
        setErrors({ ...err });
        return Object.values(err).every((v) => v == false);
    }

    const handleSubmit = () => {
        const validForm = noErrorValidator();

        if(validForm) {
            createEvent();
            setShowModal(false);
        }
    }

    const addTag = () => {
        const tag = tagRef.current.value;
        setTags([...new Set([...tags, tag])]);
        tagRef.current.value = "";
    }

    const removeTag = (tag) => {
        const newTags = tags.filter((t) => t !== tag);
        setTags(newTags);
    }

    useEffect(() => {
        setErrors({
            name: false,
            date: false,
            place: false,
            price: false,
            capacity: false,
            distance: false,
            description: false
        });
        setTags([]);
    }, [showModal])

    return (
        <>
            <div className="flex px-4 flex-row-reverse">
                <Button small fill onClick={openModal}>
                    <div className="flex align-middle">
                        <PlusIcon className="inline h-[20px] my-auto mr-1" />
                        Nuevo evento
                    </div>
                </Button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative xs:w-[100vw] sm:w-[80vw] my-6 mx-auto max-w-3xl">
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
                                    <div className="w-full flex xs:flex-col md:flex-row flex-wrap">
                                        <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="name">
                                                Nombre del evento
                                            </label>
                                            <input 
                                                className={`block mb-2 text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.name)}`} 
                                                id="name"
                                                type="text"
                                                placeholder="Nombre"
                                                ref={nameRef}
                                            />
                                        </div>
                                        <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="date">
                                                Fecha
                                            </label>
                                            <input 
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.date)}`} 
                                                id="date"
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}
                                                placeholder="01/01/2023"
                                                ref={dateRef}
                                            />
                                        </div>
                                        <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="place">
                                                Lugar
                                            </label>
                                            <input 
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.place)}`} 
                                                id="place"
                                                type="text"
                                                placeholder="Ubicación"
                                                ref={placeRef}
                                            />
                                        </div>
                                        <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="photo">
                                                Foto
                                            </label>
                                            <input 
                                                className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-xl py-1 px-3 cursor-pointer bg-gray-50 focus:outline-none`} 
                                                id="photo"
                                                type="file"
                                                accept="image/png, image/jpeg"
                                                placeholder="Imagen"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex overflow-y-auto flex-wrap">
                                        <div className="mb-6 xs:w-2/4 md:w-1/3 md:px-4 xs:pr-2">
                                            <label className="block text-white text-sm font-bold mb-2" for="price">
                                                Precio
                                            </label>
                                            <input 
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.price)}`} 
                                                id="price"
                                                type="number"
                                                placeholder="0"
                                                ref={priceRef}
                                            />
                                        </div>
                                        <div className="mb-6 xs:w-2/4 md:w-1/3 md:px-4 xs:pl-2">
                                            <label className="block text-white text-sm font-bold mb-2" for="capacity">
                                                Capacidad
                                            </label>
                                            <input
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.capacity)}`} 
                                                id="capacity" 
                                                type="number" 
                                                placeholder="0"
                                                ref={capacityRef}
                                            />
                                        </div>
                                        <div className="mb-6 xs:w-2/4 md:w-1/3 md:px-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="distance">
                                                Distancia
                                            </label>
                                            <input
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.distance)}`} 
                                                id="distance" 
                                                type="text" 
                                                placeholder="0"
                                                ref={distanceRef}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full flex">
                                        <div className="mb-6 w-full md:mx-4">
                                            <label className="block text-white text-sm font-bold mb-2" for="description">
                                                Descripción
                                            </label>
                                            <textarea
                                                className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.description)}`}
                                                id="description"
                                                placeholder="Detalles del evento" 
                                                ref={descriptionRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center mt-1 text-sm sm:flex-row sm:space-y-0 sm:space-x-4 md:mx-4">
                                        <div className="w-full sm:mb-2">
                                            <label className="block text-white text-sm font-bold mb-2" for="tags">
                                                Tags
                                            </label>

                                            <input id="tags" 
                                                className="mt-1 py-2 px-3 w-full border-2 rounded-xl outline-none placeholder:text-gray-400 peer"
                                                type="text" placeholder="ejemplo" ref={tagRef} 
                                            />
                                            <p className="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">less than 5
                                            characters</p>
                                        </div>
                                        <div onClick={addTag} className="w-full text-center py-3 px-8 text-sm font-medium bg-secondary text-gray-100 rounded-xl cursor-pointer sm:w-min my-4 sm:mb-0">
                                            <span>Agregar</span>
                                        </div>
                                    </div>
                                </form>
                                <div class='px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-white sm:mx-4'>
                                    {tags.map((tag, index) => 
                                        <span
                                            key={index}
                                            class="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-gray-700 text-gray-200 hover:bg-gray-800 hover:text-gray-100">
                                            {tag}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 hover:text-gray-300" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd" onClick={removeTag.bind(this, tag)}
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
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
        </>
    )
}

export default RegisterModal;
