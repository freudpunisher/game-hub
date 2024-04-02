// import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatformIconlist from './PlatformIconlist'


interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    // console.table(game.parent_plateforms)

  return (
    <Card borderRadius={10}  overflow='hidden'>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconlist plateforms={game.parent_platforms.map(p => p.platform)}/>
      </CardBody>
    </Card>
  )
}


interface Props {
    game: Game
}

export default GameCard
