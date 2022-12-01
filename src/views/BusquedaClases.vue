<template>
    <div>
    
            <!--CONTENIDO-->
<div class="mt-5 md:col-span-8 md:mt-0 border-transparent bg-gray-100">


    <div class="shadow sm:overflow-hidden sm:rounded-md ">
        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">


            <div class="grid grid-cols-3 gap-6 ajuste-grid">
                <div class="col-span-3 sm:col-span-2 ajuste-input">
                    <label for="company-website"
                        class="block text-left text-sm font-medium text-gray-700">Ubica tus
                        roomates</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" v-model="titulo" required class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm " />                                        
                        <button type="submit" class="inline-flex rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ajuste-boton"
                            @click="recibirBusquedaFiltrada()"
                        >Buscar</button>                                        
                    </div>
                </div>

                <div class="col-span-3 sm:col-span-2">

                    <div class="mt-1 flex rounded-md shadow-sm">

                        <div>
                            <label for="company-website"
                                class="block text-left text-sm font-medium text-gray-700">Necesidad</label>
                            <select v-model="tipo_usuario"
                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                                <option value="Tengo Cuarto">Tengo cuarto</option>
                                <option value="Necesito Cuarto">Necesito Cuarto</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="company-website"
                                class="block text-left text-sm font-medium text-gray-700">Renta</label>
                            <select v-model="monto_renta"
                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option disabled value="">Please select one</option>
                                <option value="700">$0 a $700</option>
                                <option value="2500">$701 a $2500</option>
                                <option value="10000000000">mas de $2500</option>
                            </select>
                        </div>

                        <div>
                            <label for="company-website"
                                class="block text-left text-sm font-medium text-gray-700">Departamento</label>
                            <select v-model="departamento"
                                class="block rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                <option v-for="dep in list_departamento" :key="dep.departamento_id" :value="dep.departamento_id">{{dep.nombre_depa}}</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>


        </div>

    </div>
</div>
<!--/CONTENIDO-->
    </div>
</template>

<style scoped>
  .ajuste-grid{
        display: flex;
        justify-content: flex-start;
  }
  .ajuste-input{
    width: 50%;
  }
  .ajuste-boton{
    margin-left: 2%;
  }
  select {
    margin-left: 2px;
  }
/*
<!--hay que terminar de hacer la barra responsiva -->
*/
</style>

<script>
import CheckBoxMamalon from '../components/CheckBoxMamalon.vue'
import SimpleForm from '../components/SimpleForm.vue'
import VueMultiselect from 'vue-multiselect'
import sidebar1 from '../components/Sidebar1.vue'
import { getAPI } from '../axios-api'

export default {
    name: 'Busqueda',
    data (){
        return {
            departamento : null,
            tipo_usuario : null,
            monto_renta : 0,
            list_departamento : []
        }
    },
    methods:{
        recibirBusquedaFiltrada : function (){
            //modiificar para que mande los filtros de verdad
            let request_data_filter = this.obtener_datos_filtrados()
            this.$emit('recibirBusquedaFiltrada',"hola mundo desde la  habitacion del hijo")
        },
        obtener_datos_filtrados : function(){
            let reponse_data = null
            getAPI.get("deparamento/",{
                departamento_id : this.departamento,
                monto_renta : this.monto_renta,
                necesidad_perfil : this.tipo_usuario
            }
            ).then(
                response =>{
                    reponse_data = response.data
                }
            ).catch(
                error =>{
                    console.log(error)
                }
            )
        }
    },
    components: {
        CheckBoxMamalon: CheckBoxMamalon,
        SimpleForm: SimpleForm,
        VueMultiselect,
        sidebar1: sidebar1,
    },
    created(){
        let url = "departamento/"
        getAPI.get(url).then(
            response => {
                this.list_departamento = response.data
            }
        ).catch(
            error =>{
                console.log(error)
            }
        )
    }
};
</script>