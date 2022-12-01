<template>
    <div>
        <navbar1></navbar1>
    </div>

    <div class="grid grid-cols-3">
        <div>
            <sidebar1></sidebar1>
        </div>
        <div class="col-span-2">
            <div class="bg-white">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <h2 class="mt-16 flex justify-center align-center text-2xl font-bold tracking-tight text-black">{{ product.name }}</h2> 
                        <div class="grid grid-cols-4 sm:py-16 sm:px-24 lg:max-w-24 lg:px-2">
                           <div class="col-span-3" align="left">         
                                <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">Descripcion del lugar</h2>
                                <h3 class="justify-left text-sm text-gray-700" align="justify">{{ product.descripcion }}</h3>
                           </div>
                            <div class="mt-4 justify-between">              
                                <div class="justify-between" align="center">
                                   <div class="min-h-50 aspect-w-1 aspect-h-1 w-28 cursor-pointer text-sm border-2 border-transparent rounded rounded-circle focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                        <img class="rounded h-full w-full object-cover lg:h-full lg:w-full text-align-center" :src="product.imageSrc" alt="logo"  />                                             
                                    </div>
                                    <p class="mt-2 text-sm text-gray-700">{{ product.color }}</p> 
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
                                <h3 class="flex justify-left align-left text-sm text-gray-700">{{ product.ciudad }}</h3>
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Departamento</h2> 
                                <h3 class="flex justify-left align-left text-sm text-gray-700">{{ product.depa }}</h3>       
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Como llegar</h2> 
                                <h3 class="flex justify-left align-left">MAPA</h3>  
                                <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Amenidades</h2> 
                                <h3 class="flex justify-left align-left text-sm text-gray-700">{{ product.depa }}</h3>   
                            </div>
                                 
                            <div class="grid grid-rows-2">  
                                
                                <div class="min-h-80 aspect-w-1 aspect-h-1 w-80 cursor-pointer border-transparent focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                    <h2 class="flex justify-left align-left font-bold tracking-tight text-gray-900">Fotos del lugar</h2>
                                    <img  class="h-full w-full object-cover lg:h-full lg:w-full" :src="product.imageSrc" alt="imagen"/>      
                                </div>                                  
                                <div>
                                    <h2 class="mt-16 flex justify-left align-left font-bold tracking-tight text-gray-900">Renta</h2> 
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">$ {{ product.depa }}</h3>
                                    <h2 class="mt-4 flex justify-left align-left font-bold tracking-tight text-gray-900">Max. Ocupantes</h2> 
                                    <h3 class="flex justify-left align-left text-sm text-gray-700">{{ product.depa }}</h3>              
                                </div>
                            </div>
                                <a href="/departamento">
                                    <input type="button" class="group relative flex w-36 cursor-pointer justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-offset-2" value="Contactar">
                                </a>               
                        </div>
                
                </div>


            </div>

            <div class="w-full">
                <p> </p>
                <div v-for="depa in API_Depa" :key="depa.departamento_id" class="flex">
                    {{ depa.departamento_id }}
                    {{ depa.pais.nombre_pais }}
                    {{ depa.nombre_depa }}
                </div>
            </div>
        </div>

    </div>
   
</template>


<script>
import navbar1 from '../components/Navbar1.vue'
import sidebar1 from '../components/Sidebar1.vue'
import { getAPI } from '../axios-api'
export default {
    
    name: 'Publicacion',
    data() {
        return {
        
          
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
    },
    components: {
        navbar1: navbar1,
        sidebar1: sidebar1,   
    }
};
</script>
  
<script setup>
const products = [
    {
        id: 1,
        name: 'Av los Heroes, las Lomas',
        href: '#',
        imageSrc: 'https://i.pinimg.com/736x/39/e9/7f/39e97f7e03ec3854a8fb45df0acb22b9.jpg',
        imageAlt: 'https://i.mydramalist.com/Xqmvx_5f.jpg',
        ciudad: 'San Salavador',
        depa: 'Lula',
        color: 'Sunoo enhypen 4 ever loca flamenca Lopez',
        descripcion: 'Es una casa con 4 habitaciones, dos baños, una sala, una cocina, piscina y gym Hay varios tipos de encabezados, que se diferencian visualmente en el tamaño de la letra que utilizan. La etiqueta en concreto es la H1, para los encabezados más grandes, H2 para los de segundo nivel y así hasta H6 que es el encabezado más pequeño. Pero lo importante, insistimos es la estructura que denotan. Una página tendrá generalmente un encabezado de nivel 1 y dentro varios de nivel 2. Luego, dentro de los H2 encontraremos si acaso H3, etc. Nunca debemos usar los encabezados porque nos formateen el texto de una manera dada, sino porque nuestro documento lo requiera según su estructura.',
    },
    // More products...
]


</script>