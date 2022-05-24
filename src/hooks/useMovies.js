import { useQuery, gql } from '@apollo/client'

const GET_MOVIES = gql`
query Query {
  allFilms {
    films {
      title
      director
      releaseDate
      speciesConnection {
        species {
          name
          classification
          homeworld {
            name
          }
        }
      }
      id
      producers
      episodeID
      created
      edited
    }
  }
}
`

const useMovies = () => {
    const {loading, error, data} = useQuery(GET_MOVIES)
  return {
      loading,
      error,
      data,
  }
}

export default useMovies