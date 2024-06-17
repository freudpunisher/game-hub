import { Button, HStack, Image, List, ListItem, Spinner} from '@chakra-ui/react';
import  useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null; 
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, isLoading, error}=useGenres();
    
    if(error) return null;

    if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map(gen =><ListItem key={gen.id} paddingY="5px">
       <HStack spacing={5}>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(gen.image_background)}/>
        <Button fontWeight={gen.id === selectedGenre?.id ? "bold" : "normal"} fontSize='lg' variant='link' onClick={()=> onSelectGenre(gen)}>{gen.name}</Button>
       </HStack>
      
      </ListItem>)}
    </List>
  )
}

export default GenreList
 