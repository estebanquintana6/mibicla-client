import React, { useState, useRef } from "react";
import Router from 'next/router';
import getConfig from 'next/config';
import swal from "sweetalert";
import axios from "@utils/axios";

import {
    GoogleMap,
    Marker,
    useJsApiLoader
} from '@react-google-maps/api';

import AdminSectionTitle from "@components/BasicElements/AdminSectionTitle";

import { isNotEmpty, isNotZero } from "@utils/validators";

const NewEvent = () => {
    const { publicRuntimeConfig } = getConfig();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: publicRuntimeConfig.mapsApiKey
    });

    const [errors, setErrors] = useState({
        name: false,
        date: false,
        price: false,
        capacity: false,
        distance: false,
        description: false,
        poster: false
    });

    const [tags, setTags] = useState([]);

    const nameRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();
    const placeRef = useRef();
    const difficultyRef = useRef();
    const priceRef = useRef();
    const distanceRef = useRef();
    const capacityRef = useRef();
    const descriptionRef = useRef();
    const tagRef = useRef();

    const posterInputRef = useRef(null)

    const [startLat, setStartLat] = useState(20.589035);
    const [startLng, setStartLng] = useState(-100.3897596);

    const errorBorder = (err) => err ? "border-red-500" : "";


    const noErrorValidator = () => {
        const err = errors;

        err["name"] = (!isNotEmpty(nameRef.current.value));
        err["date"] = (!isNotEmpty(dateRef.current.value));
        err["place"] = (!isNotEmpty(placeRef.current.value));
        err["capacity"] = (!isNotZero(capacityRef.current.value));
        err["distance"] = (!isNotEmpty(distanceRef.current.value));
        err["description"] = (!isNotEmpty(descriptionRef.current.value));
        err["poster"] = !(posterInputRef.current.files.length > 0);
        setErrors({ ...err });
        return Object.values(err).every((v) => v == false);
    }

    const createEvent = async () => {
        try {

            let formData = new FormData();
            formData.append("name", nameRef.current.value);
            formData.append("description", descriptionRef.current.value)
            formData.append("time", timeRef.current.value);
            formData.append("place", placeRef.current.value);
            formData.append("date", dateRef.current.value);
            formData.append("difficulty", difficultyRef.current.value);
            formData.append("capacity", capacityRef.current.value);
            formData.append("distance", distanceRef.current.value);
            formData.append("price", priceRef.current.value);
            formData.append("tags", tags);
            formData.append("startLat", startLat);
            formData.append("startLng", startLng);
            formData.append("poster", posterInputRef.current.files[0]);

            const { status } = await axios.post("/events/register", formData, {
                headers: { 
                    Authorization: localStorage.getItem("user")
                }
            });

            if (status === 200) {
                swal("Éxito", "Evento guardado!", "success")
                    .then(() => {
                        Router.push('/admin/panel/eventos/');
                    });
            }
        } catch ({ message }) {
            swal("Error", "Hubo un error, inténtelo más tarde", "error");
        }
    }

    const handleSubmit = () => {
        const validForm = noErrorValidator();
        if (validForm) {
            createEvent();
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

    return (
        <>
            <section className="sm:ml-64 p-5">
                <AdminSectionTitle title={"Nuevo evento"} />
                <div className="mt-6">
                    <form>
                        <div className="px-4">
                            <h4 className="text-xl font-bold text-gray-500">Generales</h4>
                            <hr></hr>
                        </div>
                        <div className="w-full flex xs:flex-col md:flex-row flex-wrap mt-4">
                            <div className="mb-4 xs:w-full md:w-1/3 md:px-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
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
                            <div className="mb-4 xs:w-full md:w-1/3 md:px-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="date">
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
                            <div className="mb-4 xs:w-full md:w-1/3 md:px-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="date">
                                    Hora de inicio
                                </label>
                                <input
                                    className={`block text-sm font-medium shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errorBorder(errors.date)}`}
                                    id="time"
                                    type="time"
                                    ref={timeRef}
                                />
                            </div>
                            <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="place">
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
                            <div className="mb-6 xs:w-2/4 md:w-2/4 md:px-4 xs:pr-2">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="difficulty">
                                    Dificultad
                                </label>
                                <select
                                    className="border text-gray-900 text-sm shadow rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3"
                                    name="difficulty" id="difficulty" ref={difficultyRef}>
                                    <option value=""></option>
                                    <option value="Entusiasta">Entusiasta</option>
                                    <option value="Principiante">Principiante</option>
                                    <option value="Intermedio">Intermedio</option>
                                    <option value="Avanzado">Avanzado</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex overflow-y-auto flex-wrap">
                            <div className="mb-6 xs:w-2/4 md:w-1/3 md:px-4 xs:pr-2">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="price">
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
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="capacity">
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
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="distance">
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
                        <div className="px-4">
                            <h4 className="text-xl font-bold text-gray-500">Punto de inicio</h4>
                            <hr></hr>
                        </div>
                        <div className="w-full flex overflow-y-auto flex-wrap mt-4 pl-4 mb-4">
                            <div class="mx-auto">
                                {
                                    isLoaded ? (
                                        <GoogleMap
                                            mapContainerStyle={{
                                                width: '400px',
                                                height: '400px'
                                            }}

                                            center={{
                                                lat: startLat,
                                                lng: startLng
                                            }}
                                            zoom={14}
                                            onClick={({ latLng }) => {
                                                const { lat, lng } = latLng;
                                                const clickedLat = lat();
                                                const clickedLng = lng();

                                                setStartLat(clickedLat);
                                                setStartLng(clickedLng);
                                            }}
                                        >
                                            <Marker position={{
                                                lat: startLat,
                                                lng: startLng
                                            }} />
                                        </GoogleMap>
                                    ) : <></>
                                }
                            </div>
                        </div>
                        <div className="px-4">
                            <h4 className="text-xl font-bold text-gray-500">Fotos</h4>
                            <hr></hr>
                        </div>
                        <div className="w-full flex overflow-y-auto flex-wrap mt-4">
                            <div className="mb-4 xs:w-full md:w-2/4 md:px-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="photo">
                                    Cartel del evento
                                </label>
                                <input
                                    className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-xl py-1 px-3 cursor-pointer bg-gray-50 focus:outline-none ${errorBorder(errors.poster)}`}
                                    id="photo"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    placeholder="Imagen"
                                    ref={posterInputRef}
                                />
                            </div>
                        </div>
                        <div className="px-4 mt-4">
                            <h4 className="text-xl font-bold text-gray-500">Descripción y tags</h4>
                            <hr></hr>
                        </div>
                        <div className="w-full flex mt-5">
                            <div className="mb-6 w-full md:mx-4">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="description">
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

                        <div className="flex xs:flex-row items-center mt-1 text-sm sm:flex-row sm:space-y-0 sm:space-x-4 md:mx-4">
                            <div className="xs:w-2/3 sm:w-full sm:mb-2 sm:ml-auto xs:mr-1 sm:mr-0">
                                <label className="block text-black text-sm font-bold mb-2" htmlFor="tags">
                                    Tags
                                </label>

                                <input id="tags"
                                    className="mt-1 py-2 px-3 w-full border-2 rounded-xl outline-none placeholder:text-gray-400 peer"
                                    type="text" placeholder="ejemplo" ref={tagRef}
                                />
                                <p className="ml-2 text-xs text-pink-700 invisible peer-invalid:visible dark:text-gray-200">less than 5
                                    characters</p>
                            </div>
                            <div className="xs:w-1/3 xs:mt-2 sm:mt-1 sm:w-1/4 sm:mr-auto">
                                <div onClick={addTag} className="text-center py-3 px-8 text-sm font-medium bg-gray-700 text-gray-200 rounded-xl cursor-pointer sm:mb-0">
                                    <span>Agregar</span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='px-2 pt-2 pb-11 flex flex-wrap rounded-lg bg-white sm:mx-4'>
                        {tags.map((tag, index) =>
                            <span
                                key={index}
                                className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-gray-700 text-gray-200 hover:bg-gray-800 hover:text-gray-100">
                                {tag}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 hover:text-gray-300" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd" onClick={removeTag.bind(this, tag)}
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                        clip-rule="evenodd" />
                                </svg>
                            </span>
                        )}
                    </div>
                    <div className="flex">
                        <span
                            className="w-1/2 text-center mx-auto py-3 px-8 text-sm font-medium bg-secondary text-gray-100 rounded-xl cursor-pointer sm:mb-0"
                            type="button"
                            onClick={() => handleSubmit()}
                        >
                            Guardar
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}

export default NewEvent;