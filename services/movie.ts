import { iMovie } from '../interfaces/movie'
import { Fetcher } from './api'

export const getMovieById = async (id: number) => {
  const res = await Fetcher(`movie/${id}`)
  if (res.status === 200) {
    return res.json()
  }
  return null
}

const fetchPopularMovies = async () => {
  const res = Fetcher(
    `/movie/popular?language=${'en-US'}&page=1`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (!res) return null

  return res
}

export const getPopularMovies = async (): Promise<iMovie[] | null> => {
  const data = await fetchPopularMovies()

  if (!data) return null

  return data?.results
}