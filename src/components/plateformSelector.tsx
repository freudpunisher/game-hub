import { Button,Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'
import { Platform } from '../hooks/useGames'

interface Props{
    onSelectPlatform: (platfrom: Platform) => void;
    selectedPlatform: Platform | null;
}


const  PlateformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {
    const { data, error } = usePlateforms();
   if(error) return null
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              {selectedPlatform?.name || "Platform"}
          </MenuButton>
          <MenuList>
              {data.map(item => <MenuItem key={item.id} onClick={()=> onSelectPlatform(item)}>{item.name}</MenuItem> ) 
              }
          </MenuList>
    </Menu>
  )
}

export default PlateformSelector
