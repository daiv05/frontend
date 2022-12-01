<template>
    
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
        
        <h1 class="text-black text-1x1 title-font font-bold mb-2">Encuentra tu lugar perfecto</h1>
            <h1 class="text-black text-2xl title-font font-bold mb-2">Encuentra un compañero de cuarto</h1>
            <h1 class="text-black text-2xl title-font font-bold mb-2">cerca de ti hoy!</h1>

     <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-30 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      
      
    <!-- component -->
<div tabindex="0" class="focus:outline-none" v-if="verificar_consultas">
            <!-- Remove py-8 -->
            <div class="mx-auto container py-8" v-for="post in alquileres" :key="post.publicacion_id">
                <div class="flex flex-wrap items-center lg:justify-between justify-center">
                    <!-- Card 1 -->
                    <div tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="cuarto 1" :src=" 'http://localhost:8000' + post.ruta_foto" tabindex="0" class="focus:outline-none w-full h-44" />
                        </div>
                        <div class="bg-white">
                            <div class="flex items-center justify-between px-4 pt-4">
                                
                            </div>
                            <div class="p-4">
                                <div class="flex items-center">
                                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">{{post.titulo}}</h2>
                                </div>
                                <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">{{post.descrip_lugar}}</p>
                                <div class="flex items-center justify-between py-4">
                                    <button class="px-4 py-2 bg-gray-900 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200">Ver</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Card 1 Ends -->
                    
                    <!-- Card 3 Ends -->

                </div>
            </div>
            <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
        </div>
</template>
<script>
import{getAPI} from '@/axios-api';
import user from '@/helper/user';
import { useMeta } from 'vue-meta'
export default {
    name: 'Detalle Alquiler',
    setup() {
    useMeta({
      title: "rommies",
      description: "Busca, filtra, conoce y comparte. CheroomSV es una plataforma que busca conectar a las personas en la busqueda de un roomate. Comparte, conoce, alquila y vive con tu compañero ideal.",
      keywords: "alquilar, roommate, buscar, compañero, cheroomsv, cuarto, alquiler, chero, hotel, room, conocer, el salvador",
    });
  },
    data (){
        return {
            lista_alquileres:[],
            fotos:[],
            alquileres:[]
        }

    },
    created(){
        let url = 'publicacion_alquiler/'
        getAPI.get(url, {headers: user.get_header_authorization_token()}).then(response=>{
            this.alquileres = response.data
            console.log(response.data)
            console.log(this.alquileres["0"])
        }).catch(error=>console.log(error))
        getAPI.get("foto/",{headers: user.get_header_authorization_token()}).then(response=>{
            this.fotos = response.data
        }).catch(error=>console.log(error))
    },
    methods:{
        emparejar_fotos : function(){
            for( let i = 0; i < this.fotos.length ; i++){
                console.log(i)
                if (this.fotos[i].publi_alquiler == this.alquileres[i].publicacion_id ){
                        this.alquileres[i].ruta_foto = this.fotos[i].foto_lugar
                }
            }
        }
    },
    computed :{
        verificar_consultas : function(){
            if(this.fotos && this.alquileres){
                this.emparejar_fotos()
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>
