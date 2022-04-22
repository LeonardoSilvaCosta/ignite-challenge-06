import { Flex, Image } from "@chakra-ui/react";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Cities } from "../../components/Cities";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type City = {
  cityImgUrl: string,
  cityName: string,
  stateName: string,
  urlImgFlag: string,
}

interface ContinentsProps {
  idProp: number,
  name: string,
  descricao: string,
  banner: string,
  quantidadeDePaises: number,
  quantidadeDeLinguas: number,
  quantidadeDeCidades: number,
  citiesInfo: City[]
};

export default function Continents() {
  const router = useRouter();
  const { id } = router.query;
  const [continents, setContinents] = useState<ContinentsProps[]>([
    {} as ContinentsProps,
  ]);

  useEffect(() => {
    fetch("/api/continents")
      .then((response) => response.json())
      .then((json) => setContinents(json));
  }, []);
  return (
    <>
      <Header />

      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          {continents.map(
            (e) =>
              e.id === parseInt(id) && (
                <Image key={e.id} src={e.banner} alt="banner"></Image>
              )
          )}
        </SwiperSlide>
      </Swiper>

      <Flex direction={["column", "row"]} align="flex-start" ml={["3", ""]} fontSize={["16", "24"]}>
        <Flex mt={["6", "12"]} maxW={["350px", "1120px"]} width="48rem" textAlign="justify">
          {continents.map((e) => e.id === parseInt(id) && e.descricao)}
        </Flex>

        {continents.map((e) => (
            e.id === parseInt(id) && <Info quantidadeDePaises={e.quantidadeDePaises} quantidadeDeLinguas={e.quantidadeDeLinguas} quantidadeDeCidades={e.quantidadeDeCidades} />
        ))}
      </Flex>

      {continents.map((e) => (
        e.id === parseInt(id) &&  <Cities
        citiesInfo={e.citiesInfo}
      />
      ))}
    </>
  );
}
