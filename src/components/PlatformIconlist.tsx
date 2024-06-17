
import { Platform } from "../hooks/useGames"
import { HStack, Icon } from "@chakra-ui/react"
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { IconType } from "react-icons";


interface Props{

plateforms: Platform[],
}


const PlatformIconlist = ({plateforms}: Props) => {
const iconMap: {[key: string]: IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe


}

  return (
    <HStack marginY={'10px'}>
      {plateforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>)}
    </HStack>
  )
}

export default PlatformIconlist
