// import { useState } from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlateformSelector from './components/plateformSelector'
import { Platform } from './hooks/useGames'


interface GameQuery {
  genre: Genre | null;
  platfrom: Platform | null;
  
}


function App() {
const [selectedGenre, selectedGenreList] = useState<Genre | null>(null);
const [selectedPlatform, selectedPlatformList] = useState<Platform | null>(null);

  return (
    <>
     <Grid templateAreas={
      {
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`
      }
     }
     templateColumns={
      {
        base: '1fr', 
        lg:'200px 1fr'
      }
     }
     >
<GridItem area='nav'>
  <NavBar/>
</GridItem>
<Show above='lg'>

<GridItem area='aside' paddingX={5}>
  <GenreList onSelectGenre={(genre)=> selectedGenreList(genre)} selectedGenre={selectedGenre}/>
</GridItem>
</Show>
        <GridItem area='main'>
          <PlateformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platfrom)=> selectedPlatformList(platfrom)}/>
  <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
</GridItem>
     </Grid>
    </>
  )
}

export default App
