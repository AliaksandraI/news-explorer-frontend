import { apiConfig } from './Utils.js'

export class API {

    constructor (options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _setAuthorizationHeader() {
        this._headers.authorization = 'Bearer ' + localStorage.getItem('jwt');
    }

    _getResponseData (res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`))
    }

    _get (url) {
        this._setAuthorizationHeader();
        return fetch(`${this._baseUrl}/${url}`, {
          headers: {
            authorization: this._headers.authorization
          }
        })
          .then(this._getResponseData)
      }

    

}

const api = new API(apiConfig)

export default api