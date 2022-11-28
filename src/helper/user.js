import Cookies from "js-cookie";
export default {
    set_user_logged(token){
        Cookies.set('userLogged',token, { sameSite:'strict',HttpOnly: false })
    },
    get_user_logged(){
        return Cookies.get('userLogged')
    },
    logout () {
        Cookies.remove('userLogged')
    }
};