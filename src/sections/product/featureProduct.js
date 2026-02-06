"use client";
import { ProductCard } from "@/components/cards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const tabs = ["Best sellers", "New Arrivals", "Most Rating"];

const products = [
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 6,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 8,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 10,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 3199,
    oldPrice: 4000,
    discount: 11,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
  {
    name: "GFO Fireball",
    image:
      "https://gfofireequipments.com/wp-content/uploads/2025/11/Fireball.jpg",
    price: 4000,
    rating: 0,
  },
];

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("Best sellers");
  const swiperRef = useRef(null);

  return (
    <div className="emarket-featured-products">
      <div className="container">
        <div className="emarket-section-header">
          <div className="emarket-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`emarket-tab ${activeTab === tab ? "active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="emarket-section-nav">
            <button
              className="emarket-carousel-nav prev-btn"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="emarket-carousel-nav next-btn"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="emarket-product-slider">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={6}
            loop={true}
            autoplay={false}
            breakpoints={{
              320: { slidesPerView: 1.5, spaceBetween: 10 },
              480: { slidesPerView: 2.5, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 16 },
              1200: { slidesPerView: 6, spaceBetween: 16 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
