import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export function ContinentsSlide() {
  return (
    <Flex p={["0", "8"]} mr={[0, "12"]} ml={[0, "12"]} h={["", "26rem"]}>
      <Swiper
        modules={[EffectFade]}
        effect={"fade"}
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Link href="/Continents/1">
            <a>
              <Image src="/imagens/NorthAmericaSlider.png" alt="america do norte" h={["270px", "100%"]} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/Continents/2">
            <a>
              <Image src="/imagens/SouthAmericaSlider.png" alt="america do sul" h={["270px", "100%"]} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/Continents/3">
            <a>
              <Image src="/imagens/AsiaSlider.png" alt="asia" h={["270px", "100%"]} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/Continents/4">
            <a>
              <Image src="/imagens/AfricaSlider.png" alt="africa" h={["270px", "100%"]} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/Continents/5">
            <a>
              <Image src="/imagens/EuropaSlider.png" alt="europa" h={["270px", "120%"]} />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/Continents/6">
          <a>
            <Image src="/imagens/OceaniaSlider.png" alt="oceania" h={["270px", "110%"]} />
          </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
