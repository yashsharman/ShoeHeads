import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeSwiper.css";
import OfferPage from "../offerPage/OfferPage";
import { Autoplay, Pagination} from 'swiper/modules';
import thinking from "../../assets/animations/thinking-animation.json";
import bike from "../../assets/animations/bike-animation.json";
 

function HomeSwiper() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <OfferPage  animation={thinking} h3={"Too many choices❓"} h4={"Try out recommendations❗"} p={"From casual to Formal we got you covered!😊"} />
      </SwiperSlide>
      <SwiperSlide>
        <OfferPage  animation={bike} h3={"Delivery under 7 days"} h4={"Track your Orders❗"} p={"Contact us for any queries!😊"} />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSwiper;
