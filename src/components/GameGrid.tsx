

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";





const GameGrid = () => {
    const {data, error, isLoading}=useGames();
    const Skeletons = [1,2,3,4,5,6.7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  return (
    <div>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl:5}} padding='10px' spacing={8}>
          {isLoading && Skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
{data.map(game => <GameCard key={game.id} game={game}/>)}
        </SimpleGrid>
      
    </div>
  )
}

export default GameGrid
