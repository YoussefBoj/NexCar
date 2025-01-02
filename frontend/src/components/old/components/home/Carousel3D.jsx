import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { useGetTopProductsQuery } from "../../../../redux/api/productApiSlice"; // Adjust the import path
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carousel3D.css";

const Carousel3D = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <section className="my-1">
      <h2 className="text-center w-full text-5xl font-bold mt-6">Our Exclusive Cars</h2>
      <section className="carousel-3D-swiper-section">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          loop={true}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 350,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          className="carousel-3D-swiper"
        >
          {products.map(({ _id, image, name, description, price }) => (
            <SwiperSlide key={_id}>
              <div className="image-wrapper aspect-video">
                <img className="aspect-video" src={image} alt={name} />
              </div>
              <div className="details">
                <h3>{name}</h3>
                <span>${price}</span>
                <p style={{fontWeight:"700",}}>{description.substring(0, 50)}...</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Carousel3D;
