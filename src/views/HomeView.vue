<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { useMeta } from 'vue-meta'
export default {
  name: 'HomeView',
  setup() {
    useMeta({
      title: "Login",
      description: "CheroomSV es una plataforma que busca conectar a las personas en la busqueda de un roomate. Comparte, conoce, alquila y vive con tu compañero ideal.",
      keywords: "alquilar, roommate, buscar, compañero, cheroomsv, cuarto, alquiler, chero, hotel, room, conocer, el salvador",
      'Content-Security-Policy': "upgrade-insecure-requests",
    });
  },
  components: {
    HelloWorld
  }
}
</script>
