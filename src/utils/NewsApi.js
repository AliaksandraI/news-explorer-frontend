export const BASE_URL = 'https://newsapi.org'

function getResponseData (res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(new Error(`Ошибка: ${res.status}`))
};

export const newsSearch = ( request) => {
  return fetch(`${BASE_URL}/v2/top-headlines?country=us&apiKey=[ваш_ключ]`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ request })
  })
    .then((res) => getResponseData(res))
    .then((res) => {
      return res
    })
}
