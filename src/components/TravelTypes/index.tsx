import { UnorderedList } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Image,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex max-width="720" p="4" justifyContent={"space-around"}>
      <Box
        height="24"
        display="flex"
        w="90%"
        justifyContent={["center", "space-around"]}
        flexDirection="row"
      >
        <Image
          src={isWideVersion && "/Nightlife.svg"}
          alt={isWideVersion && "vida noturna"}
        />
        <Image
          src={isWideVersion && "/Beach.svg"}
          alt={isWideVersion && "praia"}
        />
        <Image
          src={isWideVersion && "/Modern.svg"}
          alt={isWideVersion && "moderno"}
        />
        <Image
          src={isWideVersion && "/Classic.svg"}
          alt={isWideVersion && "clássico"}
        />
        <Image
          src={isWideVersion && "/More.svg"}
          alt={isWideVersion && "e mais..."}
        />
        {!isWideVersion && (
          <UnorderedList fontSize="1.2rem" textColor="yellow.500">
            <Box display="flex" gap="24" p="3">
              <ListItem><span>vida noturna</span></ListItem>
              <ListItem><span>praia</span></ListItem>
            </Box>
            <Box display="flex" gap="24" p="3">
              <ListItem><span>moderno</span></ListItem>
              <ListItem><span>clássico</span></ListItem>
            </Box>
            <Box display="flex" justifyContent="center">
            <ListItem><span>e mais...</span></ListItem>
            </Box>
          </UnorderedList>
        )}
      </Box>
    </Flex>
  );
}
