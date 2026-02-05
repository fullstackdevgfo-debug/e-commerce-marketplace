"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const brands = [
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b5-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b2-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b6-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b3-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/id10-b1-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b1-140x73.png",
  "https://opencart4.magentech.com/themes/so_emarket/layout2/image/cache/catalog/brands/b4-140x73.png",
];

export const BrandSection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="emarket-brand-section">
      <div className="container">
        <div className="emarket-brand-container">
          <button
            className="emarket-brand-carousel-nav"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="emarket-brand-list-wrapper"
            style={{ flex: 1, overflow: "hidden" }}
          >
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={6}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                480: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
                1200: { slidesPerView: 6, spaceBetween: 30 },
              }}
            >
              {brands.map((brand, index) => (
                <SwiperSlide key={index}>
                  <a href="#" className="emarket-brand-item">
                    <img src={brand} alt="Brand" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            className="emarket-brand-carousel-nav"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
