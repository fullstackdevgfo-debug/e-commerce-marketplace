"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/homeShowcase.css";

const banners = [
  { image: "https://i.pinimg.com/736x/ea/bd/aa/eabdaadef69a169117a2900e77bfde9f.jpg"  },
  { image: "https://s3images.coroflot.com/user_files/individual_files/large_601412_pefdzgritogapshe0a4l4n0tb.jpg" },
  { image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/89670937352801.573d3df298ad9.jpg"  },
];

export default function HeroBanners() {
  return (
    <section className="hero-banners">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },       // mobile: only center banner
          768: { slidesPerView: 1 },
          1025: { slidesPerView: 3 },    // desktop: 3 banners
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`hero-card ${idx === 1 ? "center" : idx === 0 ? "left" : "right"}`}
              style={{ backgroundImage: `url(${banner.image})` }}
            >
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
