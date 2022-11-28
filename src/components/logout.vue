<template>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
@click="logout()">
    <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
</button>    
</template>

<script>
import { getAPI } from '@/axios-api';
import user from "@/helper/user"

export default{
    name : "logoutComponent",
    props : {
      
    },
    methods : {
        logout : function(){
            let url = "logout/?token="+user.get_user_logged()
            getAPI.get(url)
            .then(response => {
                user.logout()
                this.$router.push("/login/")
            })
            .catch(
                error =>{
                    console.log(error)
                }
            )
        }
    }
}
</script>