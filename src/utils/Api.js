import { apiConfig } from './Utils.js'

export class API {
  constructor (options) {
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  _setAuthorizationHeader() {
    this._headers.authorization = 'Bearer ' + localStorage.getItem('jwt');
  }

  // eslint-disable-next-line space-before-function-paren
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


  getInitialArticles () {
    return this._get('articles')
  }

  addNewArticle (article) {
    this._setAuthorizationHeader();
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword: 'keyword',
        title: article.title,
        text: article.description, 
        date: article.publishedAt, 
        source: article.source.name, 
        link : article.url, 
        image: article.urlToImage,
      })
    })
      .then(this._getResponseData)
  }


  deleteCard (articleId) {
    this._setAuthorizationHeader();
    return fetch(`${this._baseUrl}/cards/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._headers.authorization
      }
    })
      .then(this._getResponseData)
  }
}

const api = new API(apiConfig)

export default api
