import { Swiper, SwiperSlide } from "swiper/react";

export default function CategoryList({ categoryList, isActive, setActive }) {
  const handleCategoryClick = (category) => {
    setActive(category.id);
  };

  return (
    <Swiper
      id="category-list"
      spaceBetween={0}
      slidesPerView={7}
      // onActiveIndexChange={(swiper) => console.log(swiper.realIndex)}
    >
      {categoryList.map((category, index) => {
        return (
          <SwiperSlide key={index} tag="li">
            <button
              className="p-2 font-semibold relative flex flex-wrap align-center justify-center w-auto h-12"
              onClick={() => handleCategoryClick(category)}
            >
              <span
                className={
                  isActive == category.id ? "text-red-400" : "text-gray-400"
                }
              >
                {category.name}
              </span>
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
