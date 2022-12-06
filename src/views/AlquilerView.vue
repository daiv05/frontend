<template>
    <div>
        <!--NAVBAR SUPERIOR-->
        <div class="sticky z-10 top-0 h-16 border-transparent bg-gray-900 lg:py-2.5">
            <div class="px-6 flex justify-between space-x-4 2xl:container">
                <div class="flex justify-left inline-block items-center content-center">
                    <img class="flex inline-block  rounded-full" src="../assets/icon.png" width="20%">
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

            <div class="md:col-span-3">
                <sidebar1></sidebar1>
            </div>

            <div class="mt-5 md:col-span-8 md:mt-0 border-transparent bg-gray-100">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                        <div class="group relative">
                            <h2
                                class="mt-16 flex justify-center align-center text-2xl font-bold tracking-tight text-black">
                                {{ publicacion.titulo }}</h2>
                            <div class="grid grid-cols-4 sm:py-16 sm:px-24 lg:max-w-24 lg:px-2">
                                <div class="col-span-3" align="left">
                                    <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">
                                        Descripcion del lugar</h2>
                                    <h3 class="justify-left text-sm text-gray-700" align="justify">
                                        {{ publicacion.descrip_lugar }}</h3>
                                </div>
                                <div class="mt-4 justify-between">
                                    <div class="justify-between" align="center">
                                        <div
                                            class="min-h-50 aspect-w-1 aspect-h-1 w-28 cursor-pointer text-sm border-2 border-transparent rounded rounded-circle focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                            <img class="h-full w-full object-cover lg:h-full lg:w-full text-align-center  rounded-full"
                                                :src="perfil.foto64" alt="logo" />
                                        </div>
                                        <p class="mt-2 text-sm text-gray-700">{{ perfil.nombre_user }}</p>
                                        <p class="mt-2 text-sm text-gray-700">{{ perfil.email }}</p>
                                        <p class="mt-2 text-sm text-gray-700">{{ perfil.genero }}</p>
                                    </div>

                                    <router-link :to="{ name: 'Perfil_Unico', params: { id_perfil: perfilID } }"
                                    class="group relative flex w-36 justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-offset-2">
                                        Ver Perfil
                                    </router-link>
                                    <b>
                                        <p class="mt-2 text-sm text-black">¡Visita su perfil para conocer más sobre la
                                            persona y contactar a tu roomate ideal!</p>
                                    </b>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div align="justify">
                                    <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">
                                        Precio
                                    </h2>
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">{{ publicacion.precio
                                    }}
                                    </h3>
                                    <h2
                                        class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">
                                        Tiempo de contrato</h2>
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">{{
                                            publicacion.tiempo_contrato
                                    }}</h3>
                                    <h2
                                        class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">
                                        Numero Ocupante</h2>
                                    <h3 class="flex justify-left align-left">{{ publicacion.num_ocupantes }}</h3>
                                    <h2
                                        class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">
                                        Amenidades</h2>
                                    <h3 v-for="amenidad in filtro_ameni" :key="amenidad.amenidad_id"
                                        class="flex justify-left align-left text-sm text-gray-700">{{
                                                amenidad.nombre_amenidad
                                        }}</h3>
                                </div>

                                <div class="grid grid-rows-2">

                                    <div
                                        class="min-h-80 aspect-w-1 aspect-h-1 w-80 cursor-pointer border-transparent focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                        <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">
                                            Foto
                                            del lugar</h2>
                                        <img class="h-full w-full object-cover lg:h-full lg:w-full" :src="foto"
                                            alt="imagen" />
                                    </div>

                                </div>
                                <a :href="'https://wa.me/' + perfil.telefono">
                                    <input type="button"
                                        class="group relative flex w-36 cursor-pointer justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-offset-2"
                                        value="Contactar">
                                </a>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import navbar1 from '../components/Navbar1.vue'
import sidebar1 from '../components/Sidebar1.vue'
import { getAPI } from '../axios-api'
import user from '@/helper/user'
export default {

    name: 'PublicacionUnica',
    data() {
        return {
            publicacion: [],
            perfil: [],
            API_Foto: [],
            lista_amenidades: [],
            filtro_ameni: [],
            foto: "",

            perfilID: 0,
        };
    },

    created() {
        const id_publicacion = this.$route.params.id_publicacion;
        const url = "/publicacion_alquiler/" + id_publicacion + "/";
        console.log(id_publicacion)

        getAPI.get(url, {
            headers: user.get_header_authorization_token()
        }).then((response) => {
            this.publicacion = response.data;
        }).then(_ => {
            this.obtenerListadoAmenidad();
            this.obtenerPerfil();
        }).catch((error) => {
            console.log(error)
        }
        )
    },

    methods: {
        obtenerPerfil() {
            getAPI.get('/user_token/', {
                headers: user.get_header_authorization_token()
            }).then((response) => {
                this.perfil = response.data;
                this.perfilID = this.perfil.perfil_id;
            }).then(_ => {
                this.obtenerFotos();
            })
                .catch((error) => {
                    console.log(error)
                }
                )
        },
        obtenerListadoAmenidad() {
            getAPI.get('/lista_amenidad/', {
                headers: user.get_header_authorization_token()
            }).then(
                (response) => {
                    this.lista_amenidades = response.data;
                }
            ).then(_ => {
                this.filtroAmenidad(this.publicacion.publicacion_id);
            })
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },

        filtroAmenidad(id_publicacion) {
            for (let i = 0; i < this.lista_amenidades.length; i++) {
                if (this.lista_amenidades[i].publicacion.publicacion_id == id_publicacion) {
                    this.filtro_ameni.push(this.lista_amenidades[i].amenidad);
                }
            }
        },

        obtenerFotos() {
            getAPI.get('/foto/', {
                headers: user.get_header_authorization_token()
            }).then(response => {
                console.log(response.data);
                this.API_Foto = response.data;
            }).then(_ => {
                this.getFoto(this.publicacion.publicacion_id);
            }).catch((error) => {
                console.log(error)
            });
        },

        getFoto(id_publicacion) {
            console.log("AAAAAAAAAAAAA: " + id_publicacion)
            for (let i = 0; i < this.API_Foto.length; i++) {
                if (this.API_Foto[i].publi_alquiler == id_publicacion) {
                    this.foto = this.API_Foto[i].foto64;
                }
            }
        },



        // getCiudad(id_ciudad) {
        //     getAPI.get('/ciudad/' + id_ciudad, {
        //         headers: user.get_header_authorization_token()
        //     }).then(
        //         (response) => {
        //             this.ciudad = response.data;
        //         }
        //     ).catch(
        //         (error) => {
        //             console.log(error)
        //         }
        //     )
        // },
        // getDepartamento(id_departamento) {
        //     getAPI.get('/departamento/' + id_departamento, {
        //         headers: user.get_header_authorization_token()
        //     }).then(
        //         (response) => {
        //             this.departamento = response.data;
        //         }
        //     ).catch(
        //         (error) => {
        //             console.log(error)
        //         }
        //     )
        // },
    },
    components: {
        navbar1: navbar1,
        sidebar1: sidebar1,
    }
};
</script>