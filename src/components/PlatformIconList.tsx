import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';

import {Platform} from "../hooks/useGames";
import {HStack, Icon } from "@chakra-ui/react";
import {BsGlobe, MdPhoneIphone, SiNintendo} from "react-icons/all";
import {IconType} from "react-icons";

interface  Props {
    platforms: Platform[]
}
const PlatformIconList = ({platforms}: Props) => {

    const iconMap: {[key: string] : IconType} = {
       pc: FaWindows,
       playstation: FaPlaystation,
       xbox: FaXbox,
       nintendo: SiNintendo,
       mac: FaApple,
       linus: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
    }

    return <HStack marginY={1}>
    {platforms.map((platform) => <Icon as={iconMap[platform.slug]} color="gray.500" /> )}
    </HStack>;
};

export default PlatformIconList;