<template>

    <div>
        <div class="md:grid md:grid-cols-6 md:gap-6">
            <div class="md:col-span-1">
                <!-- <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what
                        you share.</p>
                </div> -->
            </div>

            <div class="mt-5 md:col-span-4 md:mt-0">

                <form >
                    <br>
                    <p class="font-sans text-2xl font-bold">¡Publica la informacion de tu alquiler!</p>
                    <div class="shadow sm:overflow-hidden sm:rounded-md">
                        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">


                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website"
                                        class="block text-left text-sm font-medium text-gray-700">Ponle un titulo a tu
                                        publicaci&oacute;n</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <!-- <span
                                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span> -->
                                        <input type="text" v-model="titulo"
                                            class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Se renta casa en..." />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label for="about" class="block text-sm font-medium text-gray-700 text-left">Describe tu
                                    hogar y lo que esperas compartir!</label>
                                <div class="mt-1">
                                    <textarea id="about" name="about" rows="3" v-model="descrip_lugar"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Mi casita humilde..." />
                                </div>
                                <p class="mt-2 text-sm text-gray-500"></p>
                            </div>


                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name"
                                        class="block text-sm font-medium text-gray-700 text-left">Departamento</label>
                                    <select v-model="depa_seleccion" name="departamento" id="departamento_id"
                                        v-on:change="getCiudadFiltro"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                        <option disabled value="">Seleccione un elemento</option>
                                        <option v-for="depa in API_Depa" :key="depa.departamento_id">
                                            {{ depa.nombre_depa }}
                                        </option>
                                    </select>
                                    <br>
                                    <label for="last-name"
                                        class="block text-sm font-medium text-gray-700 text-left">Ciudad</label>
                                    <select name="ciudad" id="ciudad_id" v-model="ciu_seleccion"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                        <option disabled value="">Seleccione un elemento</option>
                                        <option v-for="ciu in cius" :key="ciu.ciudad_id"> {{ ciu.nombre_ciudad }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-span-6 sm:col-span-3">
                                    <p class="text-bold text-sm">GOOGLE MAPS HERE</p>
                                </div>
                            </div>

                            <div class="text-left text-sm">
                                <label>Amenidades</label>
                                <VueMultiselect class="text-sm" v-model="amenis_seleccion" :options="API_Amenidad"
                                    :multiple="true" :close-on-select="false"
                                    placeholder="Seleccione las comodidades de su hogar..." label="nombre_amenidad"
                                    track-by="nombre_amenidad" />
                            </div>


                            <div class="grid grid-cols-4 gap-2 block-inline">

                                <div class="col-span-2">
                                    <label for="renta"
                                        class="block text-left text-sm font-medium text-gray-700">Renta</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <span
                                            class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">$</span>
                                        <input type="number" name="renta" id="rent" v-model="precio"
                                            class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Valor de la cuota mensual, trimestral..." />
                                    </div>
                                </div>

                                <div class="col-span-2">
                                    <label for="ocupo" class="block text-left text-sm font-medium text-gray-700">Max.
                                        Ocupantes</label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input type="number" name="ocupantes" id="ocu" v-model="num_ocupantes"
                                            class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="2 personas..." />
                                    </div>
                                </div>

                            </div>


                            <div>
                                <label for="contrat" class="block text-left text-sm font-medium text-gray-700">Tiempo
                                    inicial de Contrato</label>
                                <select name="contrato" id="contrato_id" v-model="tiempo_contrato"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    <option disabled selected value="">Seleccione un tipo de contrato</option>
                                    <option value="Mensual">Mensual</option>
                                    <option value="Trimestral">Trimestral</option>
                                    <option value="Semestral">Semestral</option>
                                    <option value="Anual">Anual</option>
                                </select>
                            </div>

                            <div class="text-left">
                                <label for="activ" class="block text-left text-sm font-medium text-gray-700"></label>
                                <div class="flex items-start">
                                    <div class="flex h-5">
                                        <input id="comments" name="comments" type="checkbox" v-model="p_activa"
                                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="comments" class="font-medium text-gray-700 text-left">Publicacion Activa</label>
                                        <p class="text-gray-500 text-left">Especifique si la publicacion se mostrará a los demás</p>
                                    </div>
                                </div>
                            </div>





                            <!-- <div>
                                <label class="block text-sm font-medium text-gray-700">Sube fotos del loca</label>
                                <div class="mt-1 flex items-center">
                                    <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                        <svg class="h-full w-full text-gray-300" fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </span>
                                    <button type="button"
                                        class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Change</button>
                                </div>
                            </div> -->

                            <div>
                                <label class="block text-sm font-medium text-gray-700 text-left">Sube fotos del
                                    lugar</label>
                                <div
                                    class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                            viewBox="0 0 48 48" aria-hidden="true">
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file"
                                                class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input type="file" id="file" ref="file" @change="onFileChange"
                                                    />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
                            <button type="submit"
                                class="inline-flex rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white 
                                shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Cancelar</button>
                            <button type="submit" @click.prevent="submitNewPublicacion"
                                class="inline-flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white 
                                shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Guardar</button>
                        </div>

                    </div>
                </form>

            </div>
            <div class="md:col-span-1">
            </div>

        </div>
    </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.css">
    .multiselect,
    .multiselect__select,
    .multiselect__tags,
    .multiselect__content-wrapper,
    .multiselect__input,
    .multiselect__single,
    .multiselect__placeholder,
    .multiselect__tag,
    .multiselect__tag-icon {
        line-height: 1.4;
        font-size: 1em;
        max-height: 10px;
        width: 80%;
    }
</style>

<script>
import CheckBoxMamalon from '../components/CheckBoxMamalon.vue'
import SimpleForm from '../components/SimpleForm.vue'
import VueMultiselect from 'vue-multiselect'
import { getAPI } from '../axios-api'

export default {
    name: 'Departamento',
    data() {
        return {
            perfil: 1,
            titulo: "",
            descrip_lugar: "",
            coordenadas: "",
            num_ocupantes: 0,
            precio: 0,
            tiempo_contrato: "",
            p_activa: false,


            file: null,
            publi_creada: [],
            depa_seleccion: [],
            ciu_seleccion: [],
            cius: [],
            amenis_seleccion: [],
            API_Depa: [],
            API_Ciudad: [],
            API_Amenidad: [],
        };
    },
    created() {
        getAPI.get('/departamento/',)
            .then(response => {
                console.log('Department API has received data')
                this.API_Depa = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        getAPI.get('/ciudad/',)
            .then(response => {
                console.log('Ciudad API has received data')
                this.API_Ciudad = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        getAPI.get('/amenidades/',)
            .then(response => {
                console.log('Amendidad API has received data')
                this.API_Amenidad = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        async getCiudadFiltro() {
            this.cius = []
            for (let i = 0; i < this.API_Ciudad.length; i++) {
                if (this.API_Ciudad[i].departamento.nombre_depa == this.depa_seleccion) {
                    this.cius.push(this.API_Ciudad[i])
                }
            }
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0];

        },
        submitFoto(){
            let formData = new FormData();
            formData.append('file', this.file);
            getAPI.post('/foto/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log('Foto API ha enviado data')
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        submitNewPublicacion(){
            getAPI.post('/publicacion_alquiler/', {
                perfil: this.perfil,
                titulo: this.titulo,
                descrip_lugar: this.descrip_lugar,
                coordenadas: this.depa_seleccion + " " + this.ciu_seleccion,
                num_ocupantes: this.num_ocupantes,
                precio: this.precio,
                tiempo_contrato: this.tiempo_contrato,
                fecha_publi: new Date().toISOString().slice(0, 10),
                p_activa: this.p_activa,
            })
            .then(response => {
                console.log('Publicacion API has received data')
                console.log(response.data);
                this.publi_creada = response.data;
                this.uploadFile();
            })
            .catch(error => {
                console.log(error);
            });
        },
        onFileChange(e) {
            this.file = e.target.files[0];
        },
        uploadFile() {
            const formData = new FormData();
            formData.append('foto_lugar', this.file);
            formData.append('publi_alquiler', this.publi_creada.publicacion_id);
            getAPI.post('/foto/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log("Subida exitosa");
                console.log(res);
                //this.objeto_creado = res.data;
            }).catch(err => {
                console.log(err);
            });
        },
    },
    components: {
        CheckBoxMamalon: CheckBoxMamalon,
        SimpleForm: SimpleForm,
        VueMultiselect,
    }
};


</script>