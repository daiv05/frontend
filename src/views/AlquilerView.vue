<template>
    <div>
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
    </div>

    <div class="grid grid-cols-3">
        <div>
            <sidebar1></sidebar1>
        </div>
        <div class="col-span-2">
            <div class="bg-white">
                <div class="group relative">
                    <h2 class="mt-16 flex justify-center align-center text-2xl font-bold tracking-tight text-black">{{ publicacion.titulo }}</h2> 
                        <div class="grid grid-cols-4 sm:py-16 sm:px-24 lg:max-w-24 lg:px-2">
                           <div class="col-span-3" align="left">         
                                <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">Descripcion del lugar</h2>
                                <h3 class="justify-left text-sm text-gray-700" align="justify">{{ publicacion.descrip_lugar }}</h3>
                           </div>
                            <div class="mt-4 justify-between">              
                                <div class="justify-between" align="center">
                                   <div class="min-h-50 aspect-w-1 aspect-h-1 w-32 cursor-pointer text-sm border-2 border-transparent rounded rounded-circle focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                        <img class="rounded-full h-full w-full object-cover lg:h-full lg:w-full text-align-center" :src="'http://localhost:8000/' + perfil.foto_perfil" alt="logo"  />                                             
                                    </div>
                                    <p class="mt-2 text-sm text-gray-700">{{ perfil.username }}</p> 
                                </div>                                
                                    <a href="#" class="flex justify-center mt-2">
                                        <button type="button" class="group relative flex w-36 justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-offset-2">Ver Perfil</button>
                                    </a>                               
                                    <b><p class="mt-2 text-sm text-black">¡Visita su perfil para conocer más sobre la persona y encontrar a tu roomate ideal!</p></b>
                            </div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div align="justify">
                                <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">Ciudad</h2>
                                <h3 class="flex justify-left align-left text-sm text-gray-700">{{ ciudad.nombre_ciudad }}</h3>
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Departamento</h2> 
                                <h3 class="flex justify-left align-left text-sm text-gray-700">{{ departamento.nombre_depa }}</h3>       
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Como llegar</h2> 
                                <h3 class="flex justify-left align-left">MAPA</h3>  
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Amenidades</h2> 
                                <h3 class="flex justify-left align-left text-sm text-gray-700" v-for="amenidad in listAmenidades" :key="amenidad.amenidad_id">{{ amenidad }}</h3>   
                            </div>
                                 
                            <div class="grid grid-rows-2">  
                                
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-80 cursor-pointer border-transparent focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                    <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">Fotos del lugar</h2>
                                    <img  class="h-full w-full object-cover lg:h-full lg:w-full" :src="'http://localhost:8000/'+ foto.foto_lugar" alt="imagen"/>      
                                </div>                                  
                                <div>
                                    <h2 class="mt-16 flex justify-left align-left font-bold tracking-tight text-gray-900">Renta</h2> 
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">$ {{ publicacion.precio }}</h3>
                                    <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Max. Ocupantes</h2> 
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">{{ publicacion.num_ocupantes }}</h3>              
                                </div>
                            </div>
                                <a href="#">
                                    <input type="button" class="group relative flex w-36 cursor-pointer justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-offset-2" value="Contactar">
                                </a>               
                        </div>
                
                </div>


            </div>

        </div>

    </div>
   
</template>


<script>
import sidebar1 from '../components/Sidebar1.vue'
import { getAPI } from '../axios-api'
import user from '../helper/user'

export default {
    
    name: 'alquiler',
    data() {
        return {
            publicacion: [], 
            perfil:[],           
            ciudad: [],
            departamento: [], 
            listAmenidades: [], 
            foto: []          
        };
    },
    
    created() {

        let url = 'publicacion/'+this.$route.params.id_publicacion
        
        getAPI.get(url).then(response=>{
            this.publicacion=response.data.publicacion,
            this.perfil=response.data.perfil,
            this.ciudad=response.data.ciudad,
            this.departamento=response.data.departamento,
            this.listAmenidades=response.data.amenidades,
            this.foto=response.data.foto
        }).catch(error=>console.log(error))
        
                     
        
    },

    methods: {
        
        
    },
    components: {
        sidebar1: sidebar1,   
    }
    
   
};
</script>
  
<script setup>
//Para prueba visual con datos random
const products = [
    {
        id: 1,
        name: 'Av los Heroes, las Lomas',
        href: '#',
        imageSrc: 'https://i.pinimg.com/736x/39/e9/7f/39e97f7e03ec3854a8fb45df0acb22b9.jpg',
        imageAlt: 'https://i.mydramalist.com/Xqmvx_5f.jpg',
        ciudad: 'San Salvador',
        depa: 'Lula',
        color: 'Sunoo enhypen 4 ever loca flamenca Lopez',
        descripcion: 'Es una casa con 4 habitaciones, dos baños, una sala, una cocina, piscina y gym Hay varios tipos de encabezados, que se diferencian visualmente en el tamaño de la letra que utilizan. La etiqueta en concreto es la H1, para los encabezados más grandes, H2 para los de segundo nivel y así hasta H6 que es el encabezado más pequeño. Pero lo importante, insistimos es la estructura que denotan. Una página tendrá generalmente un encabezado de nivel 1 y dentro varios de nivel 2. Luego, dentro de los H2 encontraremos si acaso H3, etc. Nunca debemos usar los encabezados porque nos formateen el texto de una manera dada, sino porque nuestro documento lo requiera según su estructura.',
    },
    
]


</script>