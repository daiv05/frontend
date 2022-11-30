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

                <form @submit.prevent="">
                    <br>
                    <p class="font-sans text-2xl font-bold">Búsqueda Clases</p>
                    <br>
                    <div class="shadow sm:overflow-hidden sm:rounded-md">
                        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">


                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website"
                                        class="block text-left text-sm font-medium text-gray-700">Ubica tus
                                        roomates</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="text" v-model="titulo" required class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />                                        
                                        <button type="submit" class="inline-flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Buscar</button>                                        
                                    </div>
                                </div>

                                <div class="col-span-3 sm:col-span-2">

                                    <div class="mt-1 flex rounded-md shadow-sm">

                                        <div>
                                            <label for="company-website"
                                                class="block text-left text-sm font-medium text-gray-700">Necesidad</label>
                                            <select v-model="selected"
                                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option disabled value="">Please select one</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                        
                                        <div>
                                            <label for="company-website"
                                                class="block text-left text-sm font-medium text-gray-700">Renta</label>
                                            <select v-model="selected"
                                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option disabled value="">Please select one</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label for="company-website"
                                                class="block text-left text-sm font-medium text-gray-700">Departamento</label>
                                            <select v-model="selected"
                                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                                <option disabled value="">Please select one</option>
                                                <option>A</option>
                                                <option>B</option>
                                                <option>C</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </form>

                <br>
                <br>
                <br>

            </div>
            <!--/CONTENIDO-->
            <div class="md:col-span-1">
            </div>

        </div>
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css">

</style>

<script>
import CheckBoxMamalon from '../components/CheckBoxMamalon.vue'
import SimpleForm from '../components/SimpleForm.vue'
import VueMultiselect from 'vue-multiselect'
import sidebar1 from '../components/Sidebar1.vue'
import { getAPI } from '../axios-api'

export default {
    name: 'Busqueda',

    components: {
        CheckBoxMamalon: CheckBoxMamalon,
        SimpleForm: SimpleForm,
        VueMultiselect,
        sidebar1: sidebar1,
    }
};
</script>