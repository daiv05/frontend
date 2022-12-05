<template>
    <div>
        <!--NAVBAR SUPERIOR-->
        <div class="sticky z-10 top-0 h-16 border-transparent bg-gray-900 lg:py-2.5">
            <div class="px-6 flex justify-between space-x-4 2xl:container">
                <div class="flex justify-left inline-block items-center content-center">
                    <img class="flex inline-block" src="../assets/icon.png" width="20%">
                    <h5 hidden class="flex text-2xl text-gray-600 font-medium lg:inline-block font-bold">
                        &nbsp;&nbsp;cheroomSV</h5>
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

        <div class="md:grid md:grid-cols-12 bg-gray-100">



            <!--MENU LATERAL-->
            <div class="md:col-span-3">
                <sidebar1 />
            </div>
            <!--MENU LATERAL-->


            <!--CONTENIDO-->
            <div class="mt-5 md:col-span-8 md:mt-0 border-transparent bg-gray-100">
                <div class="border-t border-gray-200">
                    <dl>
                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500"> Publicacion: {{ publicacion.titulo }}</dt> <br>
                            <dt class="text-sm font-medium text-gray-500"> Fecha: {{ publicacion.fecha_publi }}</dt><br>
                            <dt class="text-sm font-medium text-gray-500"> Descripcion: {{ publicacion.descrip_lugar }}</dt><br>
                            <dt class="text-sm font-medium text-gray-500"> Precio: {{ publicacion.p_activa }}</dt><br>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                        </div>
                        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">Application for</dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <!-- <button type="submit"
                    class="inline-flex rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white 
                    shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Cancelar</button> -->

        </div>
        <!--/CONTENIDO-->
        <div class="md:col-span-1">
        </div>

    </div>
</template>

<style>

</style>

<script>
import { getAPI } from '../axios-api'
import user from '../helper/user'

import sidebar1 from '../components/Sidebar1.vue'

export default {
    name: "panel_miPublicacion",
    data() {
        return {
            API_Publicacion: [],
            Perfil_Logueado: [],
            publicacion: [],

        };
    },
    created() {
        this.obt_PubliUser();
    },
    methods: {
        obt_PubliUser() {
            getAPI.get('/publicacion_alquiler/', {
                headers: user.get_header_authorization_token()
            })
                .then(response => {
                    console.log('Publicacion API has received data')
                    this.API_Publicacion = response.data;
                })
                .then(_ => {
                    this.getUserLogueado();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getUserLogueado() {
            getAPI.get('/user_token/', {
                headers: user.get_header_authorization_token()
            })
                .then(response => {
                    console.log('Perfil API has received data')
                    this.Perfil_Logueado = response.data;
                })
                .then(_ => {
                    this.publi_Filtro();
                })
                .catch(error => {
                    console.log(error);
                });
        },
        publi_Filtro() {
            this.publicacion = []
            for (let i = 0; i < this.API_Publicacion.length; i++) {
                console.log(this.API_Publicacion[i].perfil.perfil_id + " " + this.Perfil_Logueado.perfil_id)
                if (this.API_Publicacion[i].perfil.perfil_id == this.Perfil_Logueado.perfil_id) {
                    this.publicacion = this.API_Publicacion[i];
                }
            }
        },
    },
    mounted() {

    },
    components: {
        sidebar1: sidebar1,
    }
};
</script>