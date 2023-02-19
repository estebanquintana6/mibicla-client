import React, { useState, useRef } from "react";

import Image from 'next/image';

import axios from "@utils/axios";
import swal from 'sweetalert';
import { useRouter } from 'next/router'

import { isNotEmpty } from "@utils/validators";

const Register = ({ email }) => {
    const router = useRouter();
    const [errors, setErrors] = useState({
        name: false,
        password: false,
    });

    const [passwordError, setPasswordError] = useState("");

    const formRef = useRef();

    const { token } = router.query;

    const validatePassword = (password, confirmationPassword) => {
        if (password.length < 8) {
            setPasswordError("El password debe contenter al menos 8 caracteres")
            return false;
        } else if (password != confirmationPassword) {
            setPasswordError("Las contraseñas deben coincidir")
            return false;
        } else {
            setPasswordError("");
            return true;
        }
        
    }

    const validateForm = ({ name, email, ...args}) => {
        setErrors({
            name: !isNotEmpty(name),
            password: !validatePassword(args["password"], args["confirm-password"])
        })
    }

    const postData = async ({ name, password}) => {
        const res = await axios.post("/users/register", {
            name,
            password,
            register_token: token
        });

        const { status } = res;

        if(status === 200) {
            swal("Éxito", "Evento guardado!", "success").then(() => {
                router.push("/admin/login")
            });
        } else {
            const { response: { data: { error } } } = res;
            swal("Error", error, "error");
        }
    }

    const formHandle = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const formObj = Object.fromEntries(formData);
        validateForm(formObj);

        // Form doesn't have errors
        if (Object.values(errors).every((curr) => curr == false)) {
            postData(formObj);
        } 
    }

    const errorBorder = (err) => err ? "border-red-500" : "border-gray-600";

    return (
        <section className="bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 xs:py-[3rem] sm:py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
                <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"50"} />
            </a>
            <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                        Crea una cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={formHandle} ref={formRef}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Tu nombre</label>
                            <input type="name" name="name" id="name" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.name)}`} placeholder="Juan Pérez" required="" />
                            {errors.name &&
                                <p className="ml-2 text-xs peer-invalid:visible text-gray-200">Ingresa un nombre</p>   
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Tu email</label>
                            <input type="email" name="email" id="email" value={email} disabled className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.email)}`} placeholder="name@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.password)}`} required="" />
                            {errors.password &&
                                <p className="ml-2 text-xs peer-invalid:visible text-gray-200">{passwordError}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">Confirma tu contraseña</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 ${errorBorder(errors.password)}`} required="" />
                        </div>
                        <button type="submit" className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Crea tu cuenta</button>
                        <p className="text-sm font-light text-gray-400">
                            ¿Ya tienes una cuenta? <a href="#" className="font-medium hover:underline text-primary-500">Inicia sesión aquí</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Register;