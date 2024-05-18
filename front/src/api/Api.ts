import axios from "axios"
import { getToken, removeToken, SERVICE_URL } from "./auth"


class Api {
  public axios

  constructor() {
    this.axios = axios.create({
      baseURL: SERVICE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;version=v1_web',
        Authorization: `Bearer ${getToken()}` 
      },
    })
    
    this.axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
            //refreshtoken
            removeToken()
            window.location.href = '/'
          return Promise.reject() 
        }
        else if ((error.response.status === 403)) {
          //mandar pro login
          removeToken()
          window.location.href = '/'
          return Promise.reject()
        }
      }
    )
  }
}

export { Api }