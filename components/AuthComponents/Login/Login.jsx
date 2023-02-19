import React, { useState, useRef } from "react";

import Image from 'next/image';

import axios from "@utils/axios";
import swal from 'sweetalert';
import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { setToken } from "@store/userReducer";

const Login = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [error, setError] = useState(false);

    const formRef = useRef();


    const postData = async ({ email, password}) => {
        try {
            const res = await axios.post("/users/login", {
                password,
                email
            });
            
            const { status } = res;
            if ( status === 200) {
                const { data: { token } } = res;
                localStorage.setItem("user", token);
                axios.defaults.headers.common['Authorization'] = token;
                dispatch(setToken(token));
                router.push("/admin");
            } else {
                const { response: { data: { error } } } = res;
                swal("Error", error, "error");
            }
        } catch ({ response: { data: { error }}}) {
            swal("Error", error, "error");
        }
    }

    const submitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const formObj = Object.fromEntries(formData);
        postData(formObj);
     }

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen">
            <div className="flex flex-col items-center justify-center px-6 xs:py-[5rem] sm:py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <Image alt="logo" src={"/simple_logo_red.svg"} width="65" height={"50"} /> 
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Inicia sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={submitForm} ref={formRef}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                {error &&
                                    <p className="ml-2 text-xs peer-invalid:visible text-gray-200">Datos incorrectos</p>
                                }
                            </div>
                            <div className="flex flex-row-reverse">
                                <a href="#" className="text-sm font-medium hover:underline text-white">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;