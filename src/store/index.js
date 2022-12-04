import { createStore } from 'vuex'
import user from "../helper/user"
import { getAPI } from '../axios-api';
import router from '@/router';


export const store = createStore({
  state () {
    return {
      ruta_foto: "http://localhost:8000",
      username : null,
      token : null,
      auth : false,
    }
  },
  mutations : {
    SET_LOGIN(state, params){
      state.username = params.username
      state.auth = true
      state.token = params.token
    },
    SET_LOGOUT(state){
      state.username = null,
      state.token = ""
      state.auth = false
    }
  },
  actions : {
    login({dispatch},credentials){
      const url = "/login-api/"
              user.delete_user_register()
              getAPI.post(url , {username : credentials.username, password: credentials.password} )
              .then(response => {
                let params = { username : credentials.username , token : response.data["token"]}
                  user.set_user_logged(response.data["token"])
                  return   dispatch('doLogin',params)
              })
              .catch(error => {
                console.log("aqui se captura el error")
                console.log(error["response"]["data"]['error'])
                return error["response"]["data"]['error']
              })
    },
    logout({dispatch}){
      let token = this.state.token
      console.log("El token es: "+token)
      let url = "logout/?token="+this.state.token
      getAPI.get(url)
      .then(response => {
          user.logout()
          return dispatch('doLogout')
      })
      .catch(
          error =>{
              return(error)
          }
      )
    },
    doLogin({commit},params){
      console.log(params.username)
      console.log(params.token)
      if (params.username && params.token){
        commit('SET_LOGIN',params)
        router.push("/departamento/")
      }
        else{
          commit('SET_LOGIN',"","")
        }
    },
    doLogout({commit}){
      commit('SET_LOGOUT')
      router.push("/login/");
    },
    getLogin({commit}){
      let url = "obtener_usuario/?token="+user.get_user_logged()
      getAPI.get(
        url,{
          headers : user.get_header_authorization_token()
        }
      ).then(response => {
          let params = {username : response.data['user']['username'], token : response.data['token']}
          commit('SET_LOGIN',params)        
      }).catch(
       error =>{
        let param = {'username': null,token : null}
        commit("SET_LOGIN",param)
       }
      )
    }
  },
})

