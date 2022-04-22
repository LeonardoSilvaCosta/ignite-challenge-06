import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { CitiesGridElement } from "../components/CitiesGridElement";

type City = {
  cityImgUrl: string,
  cityName: string,
  stateName: string,
  urlImgFlag: string,
};

interface CitiesProps {
  citiesInfo: City[];
}
export function Cities({ citiesInfo }: CitiesProps) {
  return (
    <Flex mb="8" direction="column" justify="center" mt={["6", "14"]} ml={["0", "24"]} mr={["0", "24"]}>
      <Box fontSize="24" color="gray.600" ml="2" mb="6">
        Cidades +100
      </Box>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} gap={6}>
        {citiesInfo.map((e) => (
          <GridItem key={e.cityName}>
            <CitiesGridElement
              cardImgUrl={e.cityImgUrl}
              flagImgUrl={e.urlImgFlag}
              cityName={e.cityName}
              stateName={e.stateName}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
