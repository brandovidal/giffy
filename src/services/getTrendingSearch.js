import { API_KEY, API_URL } from './setting'

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse
  if (Array.isArray(data)) {
    return data
  }
  return []
}

export default function getTrendingSearch () {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}
