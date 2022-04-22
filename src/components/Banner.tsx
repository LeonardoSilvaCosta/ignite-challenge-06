import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation
      effect={'fade'}
      speed={800}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Image src={isWideVersion ? "/imagens/Banner.png" : "/imagens/Banner-Mobile.png" } alt="banner1" w="100%"></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/imagens/Banner2.jpg" alt="banner2"></Image>
      </SwiperSlide>  
    </Swiper>
  );
}
