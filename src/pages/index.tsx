import { Box, Divider, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { ContinentsSlide } from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />

      <Flex mt={["14", "9"]} justify="center">
        <Divider
          display="flex"
          borderColor="gray.400"
          borderWidth={["1px", "2px"]}
          ml="5"
          w="16"
        />
      </Flex>

      <Flex align="center" direction="column" mt={["6", "8"]} mb={["4"]} fontSize="24">
        Vamos nessa?
        <Box>Então escolha o seu continente.</Box>
      </Flex>

      <ContinentsSlide />
    </>
  );
}
