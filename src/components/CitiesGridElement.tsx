import { Box, Flex, Image } from "@chakra-ui/react";

interface CitiesGridElementProps {
  cardImgUrl: string,
  flagImgUrl: string,
  cityName: string,
  stateName: string
}

export function CitiesGridElement({ cardImgUrl, flagImgUrl, cityName, stateName }: CitiesGridElementProps) {
  return (
    <Flex align="center" mb="4" direction="column">
      <Box>
        <Image src={cardImgUrl} filter="brightness(95%)" borderTopRadius="4" h="10.7rem" w="16rem"></Image>
      </Box>
      <Box display="flex" justifyContent="space-between" borderLeft="1px" borderRight="1px" borderBottom="1px" p="4" borderColor="yellow.300" h="6.7rem" w="16rem">
        <Box ml="2" fontSize="20" fontWeight="bold">{cityName}<Box as="div" display="flex" fontSize="14" mt="2" color="gray.500">{stateName}</Box></Box>
        <Box as="div" display="flex" alignItems="center">
        <Image mr="2" src={flagImgUrl} h="2rem" w="2rem" borderRadius="50%" />
        </Box>  
      </Box>
    </Flex>
  );
}