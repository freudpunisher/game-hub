// import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconlist from './PlatformIconlist'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'


interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    // console.table(game.parent_plateforms)

  return (
    <Card borderRadius={10}  overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>

        <PlatformIconlist plateforms={game.parent_platforms.map(p => p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  )
}


interface Props {
    game: Game
}

export default GameCard
