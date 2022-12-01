<template>
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
    <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">

    <!--NAVBAR SUPERIOR-->
    <div class="sticky z-10 top-0 h-16 border-transparent bg-gray-900 lg:py-2.5">
                <div class="px-6 flex justify-between space-x-4 2xl:container">
                    <div class="flex justify-left inline-block items-center content-center">
                        <img class="flex inline-block" src="../assets/icon.png" width="20%">
                        <h5 hidden class="flex text-2xl text-gray-600 font-medium lg:inline-block font-bold">&nbsp;&nbsp;cheroomSV</h5>
                    </div>
                    <div class="flex space-x-4">
                        <button aria-label="chat"
                            class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                        <button aria-label="notification"
                            class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!--/NAVBAR SUPERIOR-->

            
    <main class="profile-page">

        <section class="relative block h-500-px">
            <div class="absolute top-0 w-full h-full bg-center bg-cover" style="background-image: url('https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg');">
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>

        <section class="relative py-16 bg-blueGray-200">
            <div class="container mx-auto px-4">
                <div  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div v-for="perfil in API_Perfil" :key="perfil.perfil_id" class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div class="relative">
                                <img alt="..." :src="('http://localhost:8000'+perfil.foto_perfil)" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div class="py-6 px-3 mt-32 sm:mt-0">
                                    <button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                    Añadir
                                    </button>
                                </div>
                            </div>
                        <div class="w-full lg:w-4/12 px-4 lg:order-1">
                            <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                
                            </div>
                        </div>
                        </div>
                        <div  class="text-center mt-12">
                            <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">{{perfil.nombre_user}} {{perfil.apellidos_user}} </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">{{perfil.ciudad.nombre_ciudad}}, {{perfil.ciudad.departamento.nombre_depa}}</i>  
                            </div>
                            <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-user mr-2 text-lg text-blueGray-400"></i> {{perfil.edad}} Años
                            </div>
                            <div class="mb-2 text-blueGray-600">
                                <i class="fas fa-phone mr-2 text-lg text-blueGray-400"></i> {{perfil.telefono}}
                            </div>
                        </div>
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <h1>Biografia</h1>
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        {{perfil.biografia}}
                                    </p>       
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="grid h-52 grid-cols-2 bg-white  shadow-lg">
                                <div  class="border pl-4 pt-4 ">
                                    <h2 class="font-semibold">Preferencias:</h2>
                                    <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 mt-5">
                                        <li v-for="prefer in API_Preferencias" :key="prefer.listapref_id"
                                            v-bind:value="prefer">
                                            {{prefer.preferencia.nombre_preferencia}}
                                        </li>
                                        
                                    </ul>
                                </div>
                                
                                <div  class="border pl-4 pt-4 ">
                                    <h2 class="font-semibold">Hobbies: </h2>
                                    <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400 mt-5">
                                        <li v-for="hobbie in API_Hobbies" :key="hobbie.listhobbies_id"
                                            v-bind:value="hobbie">
                                            {{ hobbie.hobbie.nombre_hobbie}}
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <h2>Redes Sociales: </h2>
                            <a :href="('https://www.facebook.com/'+perfil.user_facebook)">
                                <button class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-4 h-4">
                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                                    </svg>
                                    <span>Facebook</span>
                                </button>
                            </a>
                            
                            <a :href="('https://www.twitter.com/'+perfil.user_facebook)">
                                <button class="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4">
                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                    </svg>
                                    <span>Twitter</span>
                                </button>
                            </a>
                            
                            <a :href="('https://www.instagram.com/'+perfil.user_facebook)">
                                <button class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4">
                                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                    <span>Instagram</span>
                                </button>
                            </a>
                    
                        </div>

                    </div>
                </div>
            </div>

            <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap items-center md:justify-between justify-center">
                        <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                            
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    </main>

</template>

<script>

import sidebar1 from '../components/Sidebar1.vue'
import {getAPI} from '../axios-api'

export default{

    data() {
    return {

        API_Perfil: [],
        API_Hobbies: [],
        API_Preferencias: []

    };
},

created(){

    getAPI.get('/perfil/',)
        .then(response => {
            console.log('Perfil has received data')
            this.API_Perfil = response.data;
        })
        .catch(error => {
                console.log(error);
        });

    getAPI.get('/listadodehobbies/',)
        .then(response => {
            console.log('Hobbie has received data')
            this.API_Hobbies = response.data;
        })
        .catch(error => {
                console.log(error);
        });
    
    getAPI.get('/lista_preferencia/')
        .then(response => {
            console.log("Preferencias has received data")
            this.API_Preferencias = response.data;
        })
        .catch(error => {
                console.log(error);
        });
},

components: {
        sidebar1: sidebar1,
    }
};


</script>
