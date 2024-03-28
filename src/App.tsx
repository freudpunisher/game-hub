// import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {


  return (
    <>
     <Grid templateAreas={
      {
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`
      }
     }>
<GridItem area='nav' bg='coral'>Nav</GridItem>
<GridItem area='aside' bg='gold'>Nav</GridItem>
<GridItem area='main' bg='dodgerblue'>Nav</GridItem>
     </Grid>
    </>
  )
}

export default App
