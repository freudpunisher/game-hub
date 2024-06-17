import { Button,Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlateforms from '../hooks/usePlateforms'

const PlateformSelector = () => {
    const { data, error } = usePlateforms();
   if(error) return null
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>Plateforms</MenuButton>
          <MenuList>
              {data.map(item => <MenuItem key={item.id}>{item.name}</MenuItem> ) 
              }
          </MenuList>
    </Menu>
  )
}

export default PlateformSelector
