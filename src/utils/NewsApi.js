export const BASE_URL = 'https://nomoreparties.co/news/v2/top-headlines?country=us'
const apiKey = 'd30275b0cb0140df880e73d671eefb5b';

function getResponseData (res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`))
};

export const sendRequest = ( request ) => {

  return fetch(`${BASE_URL}`
                +`&q=${encodeURIComponent(request)}`
                +`&from=${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)}`
                +`&to=${new Date(Date.now())}`
                +`&apiKey=${apiKey}`
                +`&pageSize=${100}`
                ,
  {
    method: 'GET',
  })
    .then((res) => getResponseData(res) )
}
