const apiKey = 'NmqCtScxsHDk7t3KE81tepXzYLDuJfD0'

export default function getGifs ({ keyword = 'morty' } = {}) {
  return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      if (!Array.isArray(data)) return data

      return data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized.url
      }))
    })
}
