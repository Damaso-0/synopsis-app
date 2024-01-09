import { iMovie } from "../interfaces/movie"
import { Fetcher } from "./api"

const fetchMoviesGenres = async () => {
  const res = Fetcher(
    `/genre/movie/list?language=en`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (res === null) return null

  return res
}

const fetchMoviesByGenre = async ({ id }: { id: number }) => {
  const res = Fetcher(
    `/discover/movie?with_genres=${id}&language=en`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (res === null) return null

  return res
}

const fetchTvGenres = async () => {
  const res = Fetcher(
    `/genre/tv/list?language=en`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (res === null) return null

  return res
}

const fetchTvByGenre = async ({ id }: { id: number }) => {
  const res = Fetcher(
    `/discover/tv?with_genres=${id}&language=en`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err))

  if (res === null) return null

  return res
}

export const getGenres = async (): Promise<iGenres | null> => {
  const dataMovie = await fetchMoviesGenres()
  const dataTv = await fetchTvGenres()

  if (!dataMovie || !dataTv) return null

  return {
    movie: dataMovie?.genres,
    tv: dataTv?.genres
  }
}

export const getMoviesByGenre = async ({ id }: { id: number }): Promise<iMovie[] | null> => {
  const data = await fetchMoviesByGenre({ id })

  if (!data) return null

  return data?.results
}