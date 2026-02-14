"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "@/styles/categoryHome.css";

const categories = [
  { title: "Automatic FireBall", img: "/GFO-Fireball.png" },
  { title: "Smart Smoke Detectors", img: "https://gfofireequipments.com/wp-content/uploads/2025/11/Smart-Smoke-Detector.jpg" },
  { title: "LPG Gas Detectors", img: "https://gfofireequipments.com/wp-content/uploads/2025/12/LPG-Gas-Detector-e1764909028605.jpg" },
  { title: "Electric Board Device", img: "https://gfofireequipments.com/wp-content/uploads/2025/02/EB-Device-1.jpg" },
  { title: "Smart Display", img: "https://gfofireequipments.com/wp-content/uploads/2025/02/Smart-Display.jpg" },
  { title: "Vehicle Fire Safety Device", img: "https://gfofireequipments.com/wp-content/uploads/2025/11/Vehicle-Safety-Device.jpg" },
  { title: "Smart Water Sprinkler with AI Camera", img: "https://gfofireequipments.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-4-2025-06_17_48-PM.png" },
  { title: "Modular", img: "https://m.media-amazon.com/images/I/51b76IlmjaL._SX679_.jpg" },
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

const Categories = () => {
  const swiperRef = useRef(null);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="emarket-section-title">Shop by Categories</h3>

        <div className="flex gap-2">
          <button
            className="emarket-carousel-nav"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="emarket-carousel-nav"
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
          1200: { slidesPerView: 7 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/categories/${slugify(category.title)}`}
              className="
                emarket-category-card
                
              "
            >
              {/* Image */}
              <div className="category-image-wrapper">
                <img
                  src={category.img}
                  alt={category.title}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Title */}
              <span
                className="
                  mt-3
                  text-sm
                  leading-snug
                  min-h-[40px]
                  line-clamp-2
                  transition-colors
                  group-hover:text-emarket-orange
                "
              >
                {category.title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;