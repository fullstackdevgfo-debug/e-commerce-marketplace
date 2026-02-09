"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const categories = [
  { title: "Towels Cloud", img: "/GFO-Fireball.png" },
  { title: "Smartphone", img: "/GFO-Fireball.png" },
  { title: "Watches", img: "/GFO-Fireball.png" },
  { title: "Electronics", img: "/GFO-Fireball.png" },
  { title: "Furnitures", img: "/GFO-Fireball.png" },
  { title: "Collections", img: "/GFO-Fireball.png" },
  { title: "Fashion", img: "/GFO-Fireball.png" },
];

const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");

const Categories = () => {
  const swiperRef = useRef(null);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6 ">
        <h3 className="emarket-section-title">Shop by Categories</h3>

        <div className="flex gap-2 ">
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

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={7}
        loop
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
            {/* 🔥 CATEGORY LINK */}
            <Link
              href={`/categories/${slugify(category.title)}`}
              className="emarket-category-card group "
            >
              <div className="category-image-wrapper .">
                <img
                  src={category.img}
                  alt={category.title}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="group-hover:text-emarket-orange transition-colors">
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
