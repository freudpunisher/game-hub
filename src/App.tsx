// import { useState } from 'react'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlateformSelector from './components/plateformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'


export interface GameQuery {
  genre: Genre | null;
  platfrom: Platform | null;
  
}


function App() {
const [gameQuery, setGameQuery]=useState<GameQuery>({} as GameQuery)

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
  <GenreList onSelectGenre={(genre)=> setGameQuery({...gameQuery,genre})} selectedGenre={gameQuery.genre}/>
</GridItem>
</Show>
        <GridItem area='main'>
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>

          <PlateformSelector selectedPlatform={gameQuery.platfrom} onSelectPlatform={(platfrom) => setGameQuery({ ...gameQuery, platfrom })} />
          <SortSelector/>
          </HStack>
  <GameGrid gamequery={gameQuery}/>
</GridItem>
     </Grid>
    </>
  )
}

export default App
