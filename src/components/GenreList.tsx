import  useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {data}=useGenres();
  return (
    <div>
      {data.map(gen =><li key={gen.id}>{gen.name}</li>)}
    </div>
  )
}

export default GenreList
