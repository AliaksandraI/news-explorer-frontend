export const BASE_URL = 'http://newsapi.org/v2/top-headlines?'
const apiKey = 'd30275b0cb0140df880e73d671eefb5b';

function getResponseData (res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`))
};

export const sendRequest = ( request ) => {
    console.log("API!")
  return fetch(`${BASE_URL}+'/v2/top-headlines?country=us&'`, 
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    params:{
        'q' : `${request}`,
        'apiKey' : `${apiKey}`,
        'from' : `${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)}`,
        'to' : `${Date.now()}`,
        'pageSize': '100'
    },
    body: JSON.stringify({ request })
  })
    .then((res) => getResponseData(res))
    .then((res) => {
      return res
    })
}

