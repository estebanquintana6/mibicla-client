import React, { useState } from "react";
import Button from "@components/BasicElements/Button";
import styles from "components/LandingPage/JerseySection/JerseySection.module.css";

function EventRegister() {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [category, setCategory] = useState("");
    const [sex, setSex] = useState("");
    const [pagoRealizado, setPagoRealizado] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (name && lastname && email && telephone && category && sex) {
        setPagoRealizado(true);
      } else {
        alert("Por favor, complete todos los campos requeridos.");
      }
    };
  
    if (pagoRealizado) {
      return <p>Pago realizado con éxito.</p>;
    }
  
    return(

        <section className={`${styles["resources-section"]} md:h-screen`}>
                    <div className="flex w-full md:bg-black md:bg-opacity-70 rounded-xl md:backdrop-blur-sm md:pb-2">
                        <div className="mt-auto mb-auto rounded-xl xs:my-auto md:px-10">
                            <h1 className="align-middle mb-4 text-5xl font-extrabold tracking-tight leading-none text-white text-center">Registro</h1>
                            <p className="align-middle mt-6 mb-6 text-lg font-normal text-white lg:text-xl">
                            <div className="flex mb-1">
                            <label class="block mt-4">
                                <span class="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Nombre </span>
                                <input type="text" id="name" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Juan" 
                                value={name} onChange={(e) => setName(e.target.value)} />
                            </label> 
                            <label class="block mt-4 ml-2">
                                <span class="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Apellido </span>
                                <input type="text" id="lastname" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Perez" 
                                value= {lastname} onChange={(e) => setLastname(e.target.value)}/>
                            </label> 
                            </div>

                            <div className="flex mb-1">
                                <label class="block mt-4">
                                    <span class="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Email </span>
                                    <input type="email" id="email" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" 
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>

                                </label> 
                                <label class="block mt-4 ml-2">
                                    <span class="after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium text-white">Teléfono </span>
                                    <input type="tel" id="telephone" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="442 345 8764"
                                    value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                                    
                                </label> 
                            </div>

                            <div className="flex flex-row items-center mb-1">
                                <div className="block basis-1/2">
                                    <span class="mt-4 after:content-['*'] after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Categoría </span>
                                    <select class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" 
                                    id="category" value={category} onChange={(e) => setCategory(e.target.value)} > 
                                        <option  
                                            id="infantil" 
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Infantil, 7-12 años
                                        </option>
                                        <option  
                                            id="juvenil" 
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                            Juvenil, 13-16 años
                                        </option>
                                        <option 
                                            id="sub23"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                            Sub23, 16-23 años
                                        </option>
                                        <option 
                                            id="sub30"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                            Sub30, 23-29 años
                                        </option>
                                        <option 
                                            id="m30" 
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Master 30, 30-44 años
                                        </option>
                                        <option 
                                            id="m40"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                                            Master 40, 45-49 años
                                        </option>
                                        <option 
                                            id="m50" 
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" > 
                                            Master 50, 50+ años
                                        </option>
                                        <option
                                            id="entusiastas"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Entusiastas Libre
                                        </option>
                                        <option 
                                            id="principiantes"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Principiantes Libre
                                        </option>
                                        <option 
                                            id="intermedios" 
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Intermedios Libre
                                        </option>
                                        <option 
                                            id="expertos"  
                                            class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >
                                            Expertos Libre
                                        </option>
                                    </select>
                                </div>

                                <div className="ml-2 block basis-1/2" value={sex} onChange={(e) => setSex(e.target.value)}>
                                  <select class="mt-10 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" > 
                                        <option  id="Mujer" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >Mujer</option>
                                        <option  id="Hombre" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >Hombre</option>
                                    </select>
                                </div>

                            </div>

                            <label class="block mt-4">
                                <span class=" after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Equipo </span>
                                <input type="text" id="team" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Mi Equipo" />
                            </label>

                            <div class=" mt-4">
                                <span class=" after:ml-1 after:text-red-500 block text-sm font-medium text-white"> Seleccione su Compra </span>
                                
                                <div class="flex flex-row items-center">
                                    <div class="flex items-center pl-4 mr-2 basis-1/3">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-secondary focus:ring-2"/>
                                        <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bandana</label>
                                    </div>
                                    <div class="flex items-center pl-4 basis-1/3">
                                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-secondary dark:ring-offset-secondary focus:ring-2"/>
                                        <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jersey</label>
                                    </div>
                                    <div class="flex items-center pl-4 basis-1/3">
                                        <span class=" after:ml-1 after:text-red-500 block text-sm font-sm text-white"> Talla: </span>
                                        <select class="ml-2 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" > 
                                            <option value="S" id="size" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >S</option>
                                            <option value="M" id="size" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >M</option>
                                            <option value="G" id="size" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >G</option>
                                            <option value="XG" id="size" class="mt-1 px-3 py-2 bg-black border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" >XG</option>
                                        </select>    
                                    </div>
                                    
                                </div>                        

                            </div>

                            </p>

                    
                        

                            <Button>Registrarme</Button>
                        </div>

                    </div>
        </section>
    );
}

export default EventRegister;