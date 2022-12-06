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
    </div>

    <div class="grid md:grid-cols-6">
        <div>
            <sidebar1></sidebar1>
        </div>
        <div class="col-span-5">

            <body class="antialiased font-sans bg-gray-200 overflow-hidden">
                <div class="" style="">
                    <div class="bg-gray-100">
                        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                            <form @submit.prevent="submit">
                                <div class="mt-10 sm:mt-0">
                                    <div class="md:grid md:grid-cols-4 md:gap-6">
                                        <div class="md:col-span-1">
                                            <div class="px-4 sm:px-0">
                                                <h3 class="text-lg font-medium leading-6 text-gray-900">Informacion
                                                    Personal
                                                </h3>
                                                <p class="mt-1 text-sm text-gray-600">Por favor complete sus datos.</p>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:col-span-3 md:mt-0">

                                            <div class="overflow-hidden shadow sm:rounded-md">
                                                <div class="bg-white px-4 py-5 sm:p-6">
                                                    <div class="grid grid-cols-6 gap-6">
                                                        <div class="col-span-6 sm:col-span-2">
                                                            <label for="first-name"
                                                                class="block text-sm font-medium text-gray-700">Nombre</label>
                                                            <input type="text" v-model="Perfil_Logueado.nombre_user"
                                                                id="first-name" autocomplete="given-name"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-2">
                                                            <label for="last-name"
                                                                class="block text-sm font-medium text-gray-700">Apellido</label>
                                                            <input type="text" v-model="Perfil_Logueado.apellidos_user"
                                                                id="last-name" autocomplete="family-name"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-2">
                                                            <label for="user"
                                                                class="block text-sm font-medium text-gray-700">Username</label>
                                                            <input type="text" v-model="Perfil_Logueado.username"
                                                                id="user" autocomplete="family-name"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-4">
                                                            <label for="email-address"
                                                                class="block text-sm font-medium text-gray-700">Correo
                                                                Electr&oacute;nico</label>
                                                            <input type="text" v-model="Perfil_Logueado.email"
                                                                id="email-address" autocomplete="email"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-2">
                                                            <label for="genero"
                                                                class="block text-sm font-medium text-gray-700">G&eacute;nero</label>
                                                            <select id="genero" v-model="Perfil_Logueado.genero"
                                                                autocomplete="genero-name"
                                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                                <option value="Masculino">Masculino</option>
                                                                <option value="Femenino">Femenino</option>
                                                            </select>
                                                        </div>



                                                        <!--    <div class="col-span-6 sm:col-span-3">
                                                    <label for="country"
                                                        class="block text-sm font-medium text-gray-700">Country</label>
                                                    <select id="country" v-model="userData.selectedCountry"
                                                        autocomplete="country-name"
                                                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                        <option v-for="option in optionsCountry" :value="option.value">
                                                            {{ option.text }}
                                                        </option>
                                                    </select>
                                                </div>-->

                                                        <!--<div class="col-span-6 sm:col-span-4">
                                                    <label for="street-address"
                                                        class="block text-sm font-medium text-gray-700">Street
                                                        address</label>
                                                    <input type="text" v-model="userData.streetaddress"
                                                        id="street-address" autocomplete="street-address"
                                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                </div>-->

                                                        <div class="col-span-6 sm:col-span-2">
                                                            <label for="age"
                                                                class="block text-sm font-medium text-gray-700">Edad</label>
                                                            <input type="number" v-model="Perfil_Logueado.edad" id="age"
                                                                autocomplete="age" min="18"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>


                                                        <div class="col-span-6 sm:col-span-2 ">
                                                            <label for="city"
                                                                class="block text-sm font-medium text-gray-700">Ciudad
                                                                de Residencia</label>
                                                            <select id="city" v-model="Perfil_Logueado.ciudad"
                                                                autocomplete="city-name"
                                                                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                                <option v-for="ciudad in API_Ciudad" :value="ciudad"
                                                                    :key="ciudad.ciudad_id">
                                                                    {{ ciudad.nombre_ciudad }}
                                                                </option>
                                                            </select>
                                                        </div>


                                                        <div class="col-span-6 sm:col-span-2 ">
                                                            <label for="hobbie"
                                                                class="block text-sm font-medium text-gray-700">Hobbies</label>

                                                            <VueMultiselect class="text-sm" v-model="selectedHobbie"
                                                                :options="API_Hobbie" :multiple="true"
                                                                :close-on-select="false"
                                                                placeholder="Seleccione sus hobbies..."
                                                                label="nombre_hobbie" track-by="nombre_hobbie"
                                                                required />
                                                        </div>




                                                        <div class="col-span-6 sm:col-span-2 ">
                                                            <label for="pref"
                                                                class="block text-sm font-medium text-gray-700">Preferencias</label>

                                                            <VueMultiselect class="text-sm"
                                                                v-model="selectedPreferencia" :options="API_Pref"
                                                                :multiple="true" :close-on-select="false"
                                                                placeholder="Seleccione sus preferencias..."
                                                                label="nombre_preferencia" track-by="nombre_preferencia"
                                                                required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="hidden sm:block" aria-hidden="true">
                                    <div class="py-5">
                                        <div class="border-t border-gray-200"></div>
                                    </div>
                                </div>

                                <div>
                                    <div class="md:grid md:grid-cols-4 md:gap-6">
                                        <div class="md:col-span-1">
                                            <div class="px-4 sm:px-0">
                                                <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil</h3>
                                                <p class="mt-1 text-sm text-gray-600">Cuentanos sobre ti.</p>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:col-span-3 md:mt-0">

                                            <div class="shadow sm:overflow-hidden sm:rounded-md">
                                                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

                                                    <div>
                                                        <label for="about"
                                                            class="block text-sm font-medium text-gray-700">Añade
                                                            una descripción sobre ti</label>
                                                        <div class="mt-1">
                                                            <textarea id="about" v-model="Perfil_Logueado.biografia"
                                                                rows="3"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="A mi me gusta compartir..."></textarea>
                                                        </div>
                                                        <p class="mt-2 text-sm text-gray-500">Esta información es muy
                                                            importante.</p>
                                                    </div>

                                                    <div>
                                                        <label
                                                            class="block text-sm font-medium text-gray-700 text-left">Sube
                                                            una foto de perfil</label>
                                                        <div
                                                            class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                            <div class="space-y-1 text-center">
                                                                <svg class="mx-auto h-12 w-12 text-gray-400"
                                                                    stroke="currentColor" fill="none"
                                                                    viewBox="0 0 48 48" aria-hidden="true">
                                                                    <path
                                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                                        stroke-width="2" stroke-linecap="round"
                                                                        stroke-linejoin="round" />
                                                                </svg>
                                                                <div class="max-w-md-2">
                                                                    <img v-if="Perfil_Logueado.foto64"
                                                                        :src="Perfil_Logueado.foto64" :key="pointshover"
                                                                        class="h-48 w-48">
                                                                </div>

                                                                <div class="flex text-sm text-gray-600">
                                                                    <label for="file"
                                                                        class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                                        <span>Sube una imagen</span>
                                                                        <input type="file" id="file" ref="file"
                                                                            @change="onFileChange" />
                                                                    </label>
                                                                </div>
                                                                <p class="text-xs text-gray-500">PNG, JPG, GIF de hasta
                                                                    10MB
                                                                </p>
                                                                <p class="pl-1">or drag and drop</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div class="hidden sm:block" aria-hidden="true">
                                    <div class="py-5">
                                        <div class="border-t border-gray-200"></div>
                                    </div>
                                </div>

                                <div class="mt-10 sm:mt-0">
                                    <div class="md:grid md:grid-cols-4 md:gap-6">
                                        <div class="md:col-span-1">
                                            <div class="px-4 sm:px-0">
                                                <h3 class="text-lg font-medium leading-6 text-gray-900">Medios de
                                                    Contacto
                                                </h3>
                                                <p class="mt-1 text-sm text-gray-600">Por favor, completa toda la
                                                    información
                                                    para
                                                    lograr mejor alcance.</p>
                                            </div>
                                        </div>
                                        <div class="mt-5 md:col-span-3 md:mt-0">
                                            <div class="overflow-hidden shadow sm:rounded-md">
                                                <div class="bg-white px-4 py-5 sm:p-6">
                                                    <div class="grid grid-cols-6 gap-6">
                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="telefono"
                                                                class="block text-sm font-medium text-gray-700">Ingrese
                                                                número
                                                                de telefono</label>
                                                            <input type="text" v-model="Perfil_Logueado.telefono"
                                                                id="telefono" autocomplete="given-name"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-6">
                                                            <h1>Redes Sociales (Solo tu username)</h1>
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="facebook"
                                                                class="block text-sm font-medium text-gray-700">Facebook</label>
                                                            <input type="text" v-model="Perfil_Logueado.user_facebook"
                                                                id="facebook" autocomplete="family-name"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>

                                                        <div class="col-span-6 sm:col-span-3">
                                                            <label for="instagram"
                                                                class="block text-sm font-medium text-gray-700">Instagram</label>
                                                            <input type="text" v-model="Perfil_Logueado.user_insta"
                                                                id="instagram" autocomplete="instagram"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>



                                                        <div class="col-span-6">
                                                            <label for="twitter"
                                                                class="block text-sm font-medium text-gray-700">Twitter</label>
                                                            <input type="text" v-model="Perfil_Logueado.user_twitter"
                                                                id="twitter" autocomplete="twitter"
                                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                <button type="submit"
                                                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>

    </div>

</template>

<script>
import navbar1 from '../components/Navbar1.vue'
import sidebar1 from '../components/Sidebar1.vue'
import formLogin from '../components/FormLogin.vue'
import Detalle1 from '../components/Detalle1.vue'
import logout from '../components/logout.vue'
import VueMultiselect from 'vue-multiselect'
import { getAPI } from '../axios-api'
import Cookies from "js-cookie";
// SE NECESITA IMPORTAR ESTO PARA PODER PODER OBTENER EL USUARIO LOGUEADO
import user from "@/helper/user"
import { useMeta } from 'vue-meta'
export default {
    name: 'CompletaPerfil',
    setup() {
        useMeta({
            title: "Perfil",
            description: "CheroomSV es una plataforma que busca conectar a las personas en la busqueda de un roomate. Comparte, conoce, alquila y vive con tu compañero ideal.",
            keywords: "alquilar, roommate, buscar, compañero, cheroomsv, cuarto, alquiler, chero, hotel, room, conocer, el salvador",
            'Content-Security-Policy': "upgrade-insecure-requests",
        });
    },
    data() {
        return {
            imagen: null,
            userData: [],

            selectedHobbie: [],
            selectedPreferencia: [],

            API_Ciudad: [],
            API_Hobbie: [],
            API_Pref: [],
            API_ListHobbie: [],
            API_ListPref: [],

            anteriorHobbie: [],
            anteriorPref: [],

            anteriorListaHobbie: [],
            anteriorListaPref: [],

            file: null,
            perfil_creada: null,
            // AQUI SE GUARDA EL PERFIL DEL USUARIO LOGUEADO
            Perfil_Logueado: [],
            id_user: null,
            flagUpdate: false,
            src_image: null
        }
    },
    created() {
        getAPI.get('/ciudad/')
            .then(response => {
                this.API_Ciudad = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

        getAPI.get('/hobbie/')
            .then(response => {
                this.API_Hobbie = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

        getAPI.get('/preferencia/')
            .then(response => {
                this.API_Pref = response.data
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)

        getAPI.get('/user_token/', {
            headers: user.get_header_authorization_token()
        }).then(response => {
            this.Perfil_Logueado = response.data;
            console.log(response.data)
            this.flagUpdate = true;
        }).then(_ => {
            this.getListaP();
            this.getListaH();
        })
            .catch(error => {
                this.flagUpdate = false
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        getListaP() {
            getAPI.get('/lista_preferencia/')
                .then(response => {
                    this.API_ListPref = response.data
                }).then(_ => {
                    this.filtroPreferencia();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },

        getListaH() {
            getAPI.get('/listadodehobbies/')
                .then(response => {
                    this.API_ListHobbie = response.data
                }).then(_ => {
                    this.filtroHobbie();
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },

        filtroHobbie() {
            for (let i = 0; i < this.API_ListHobbie.length; i++) {
                if (this.API_ListHobbie[i].perfil.perfil_id == this.Perfil_Logueado.perfil_id) {
                    this.anteriorHobbie.push(this.API_ListHobbie[i].hobbie)
                    this.selectedHobbie.push(this.API_ListHobbie[i].hobbie)

                    this.anteriorListaHobbie.push(this.API_ListHobbie[i])
                }
            }
        },
        filtroPreferencia() {
            for (let i = 0; i < this.API_ListPref.length; i++) {
                if (this.API_ListPref[i].perfil.perfil_id == this.Perfil_Logueado.perfil_id) {
                    this.anteriorPref.push(this.API_ListPref[i].preferencia)
                    this.selectedPreferencia.push(this.API_ListPref[i].preferencia)

                    this.anteriorListaPref.push(this.API_ListPref[i])
                }
            }
        },






        //Agarrar la imagen subida y guardarla en 'file'
        onFileChange(e) {
            this.file = e.target.files[0];
        },
        submit() {
            let formData = new FormData();
            //file corresponde a la imagen subida
            formData.append('nombre_user', this.Perfil_Logueado.nombre_user);
            formData.append('apellidos_user', this.Perfil_Logueado.apellidos_user);
            formData.append('email', this.Perfil_Logueado.email);
            formData.append('telefono', this.Perfil_Logueado.telefono);
            formData.append('edad', this.Perfil_Logueado.edad);
            formData.append('genero', this.Perfil_Logueado.genero);
            formData.append('biografia', this.Perfil_Logueado.biografia);
            formData.append('ciudad', this.Perfil_Logueado.ciudad.ciudad_id);
            if (this.file != null) {
                formData.append('foto_perfil', this.file);
            }
            formData.append('username', this.Perfil_Logueado.username);
            formData.append('user_facebook', this.Perfil_Logueado.user_facebook);
            formData.append('user_insta', this.Perfil_Logueado.user_insta);
            formData.append('user_twitter', this.Perfil_Logueado.user_twitter);

            let id = this.Perfil_Logueado.perfil_id
            getAPI.put('/perfil/' + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Authorization": "Token " + Cookies.get('userLogged'),
                }
            }).then((res) => {
                console.log("Subida exitosa");
                console.log(res);
                //guardare hobbies
            }).then(_ => {
                this.guardarHobbies();
            }).then(__ => {
                this.guardarPreferencias();
            }).then(___ => {
                this.$router.push('/perfil');
            }).catch((err) => {
                console.log("Error al subir");
                console.log(err);
            });
        },


        get_user_logged() {
            return Cookies.get('userLogged')
        },


        guardarHobbies() {
            for (let i = 0; i < this.anteriorListaHobbie.length; i++) {
                console.log("AAAAAAAAAAAAAAAAAAAA" + this.anteriorListaHobbie[i].listhobbies_id)
                getAPI.delete('/listadodehobbies/' + this.anteriorListaHobbie[i].listhobbies_id + '/')
                    .then(response => {
                        console.log('Hobbies eliminadas')
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }

            for (let i = 0; i < this.selectedHobbie.length; i++) {
                getAPI.post('/listadodehobbies/', {
                    perfil: this.Perfil_Logueado.perfil_id,
                    hobbie: this.selectedHobbie[i].hobbie_id,
                })
                    .then(response => {
                        console.log('Hobbies guardados')
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },

        guardarPreferencias() {
            for (let i = 0; i < this.anteriorListaPref.length; i++) {
                console.log("AAAAAAAAAAAAAAAAAAAA" + this.anteriorListaPref[i].listapref_id)
                getAPI.delete('/lista_preferecia/' + this.anteriorListaPref[i].listapref_id + '/')
                    .then(response => {
                        console.log('Preferencias eliminadas')
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
            for (let i = 0; i < this.selectedPreferencia.length; i++) {
                getAPI.post('/lista_preferencia/', {
                    perfil: this.Perfil_Logueado.perfil_id,
                    preferencia: this.selectedPreferencia[i].preferencia_id,
                })
                    .then(response => {
                        console.log('Preferencias guardadas')
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },

    },
    components: {
        navbar1: navbar1,
        sidebar1: sidebar1,
        formLogin: formLogin,
        Detalle1: Detalle1,
        logout: logout,
        VueMultiselect,
    }
}

</script>