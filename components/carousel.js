import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function Carousel({ articles }) {
  return (
    <Swiper
      id="article-carousel"
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay
      // onActiveIndexChange={(swiper) => console.log(swiper.realIndex)}
    >
      {articles.map((article, index) => {
        return (
          <SwiperSlide key={index} tag="a" href={`${article.url.url}`}>
            <Image
              src={`${process.env.IMG_API_URL}${article.thumbnail.hash}/w1200`}
              alt={article.title}
              width={768}
              height={350}
              layout="intrinsic"
              className="z-0"
            />
            <div
              className="
                text-sm
                md:text-lg
                lg:text-xl 
                font-bold
                p-2 
                mx-4 
                h-16
                md:h-16
                lg:h-20
                shadow-lg 
                rounded 
                relative
                -inset-y-7
                bg-gray-50
                overflow-elipsis
                overflow-hidden
                z-20"
            >
              {article.title}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
