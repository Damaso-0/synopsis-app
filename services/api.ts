const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTM4NjEyNjM4MmFlOTIxYmFkMTFmNGFjZTI0ZWU3OCIsInN1YiI6IjY1MmY0MmRiYTgwMjM2MDExYWM3ZGIwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.caA2FkOlsnagK2zhXkKDq75bg61fcjoj23vaG7E8FE8'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

export const Fetcher = async (url: string) => {
  return fetch(BASE_URL + url, options)
}