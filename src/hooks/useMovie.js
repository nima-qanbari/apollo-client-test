import { useQuery, gql } from '@apollo/client'

const GET_MOVIE = gql`
query Film($filmId2: ID) {
  film(id: $filmId2) {
    title
    producers
    director
    id
    created
  }
}


`
const useMovie = (filmId2) => {
    const {loading, error, data} = useQuery(GET_MOVIE , {
        variables: {
            filmId2
        }
    })
  return {
      loading,
      error,
      data
  }
    
 
}

export default useMovie