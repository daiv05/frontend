import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      ruta_foto: "http://localhost:8000"
    }
  }
})

