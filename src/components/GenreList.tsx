import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {genre}=useGenres()
  return (
    <div>
      {genre.map(gen =><li key={gen.id}>{gen.name}</li>)}
    </div>
  )
}

export default GenreList
