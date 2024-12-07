import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carousel3D.css"; // Include your custom CSS

const Carousel3D = () => {
  return (
    <section className="my-1">
      <h2 className="text-center w-full text-5xl font-bold mt-6">Our Exclusives Cars</h2>
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
          {/* Slides */}
          
          {[
            "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
            "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qFjT7K07XESVdT3V8EviPAs1qewNTLUAVQ&s",
            "https://images.indianexpress.com/2024/02/apple-car-featured-ai-gen.jpg",
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2024/08_16_temerario/over/temerario-mobile.jpg",
            "https://www.shutterstock.com/image-photo/07122023-wroclaw-poland-old-opel-260nw-2377335543.jpg",
          ].map((imgSrc, idx) => (
            <SwiperSlide key={idx}>
              <div className="image-wrapper aspect-video">
                <img className="aspect-video" src={imgSrc} alt={`Slide ${idx}`} />
              </div>
              <div className="details">
                <h3>Lorem ipsum dolor</h3>
                <span>Car </span>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation and Pagination */}
        <div className="swiper-button-prev" style={{ bottom: "-630px" }}></div>
        <div className="swiper-button-next" style={{ bottom: "-630px" }}></div>
        <div className="swiper-pagination" style={{ bottom: "-630px" }}></div>
      </section>
    </section>
  );
};

export default Carousel3D;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import { useGetProductsQuery } from "../../../../redux/api/productApiSlice"; // RTK Query hook
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import "./carousel3D.css";

// const Carousel3D = () => {
//   // Fetch products using RTK Query
//   const { data, isLoading, isError } = useGetProductsQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading products</p>;

//   return (
//     <section className="my-1">
//       <h2 className="text-center w-full text-5xl font-bold mt-6">Our Exclusive Cars</h2>
//       <section className="carousel-3D-swiper-section">
//         <Swiper
//           modules={[Navigation, Pagination, EffectCoverflow]}
//           loop={true}
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={3}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 350,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           pagination={{
//             el: ".swiper-pagination",
//             clickable: true,
//           }}
//           className="carousel-3D-swiper"
//         >
//           {/* Render slides dynamically */}
//           {data.products.map((product) => (
//             <SwiperSlide key={product._id}>
//               <div className="image-wrapper aspect-video">
//                 <img
//                   className="aspect-video"
//                   src={product.image}
//                   alt={product.name}
//                 />
//               </div>
//               <div className="details">
//                 <h3>{product.name}</h3>
//                 <span>${product.price}</span>
//                 <p>{product.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* Navigation and Pagination */}
//         <div className="swiper-button-prev" style={{ bottom: "-630px" }}></div>
//         <div className="swiper-button-next" style={{ bottom: "-630px" }}></div>
//         <div className="swiper-pagination" style={{ bottom: "-630px" }}></div>
//       </section>
//     </section>
//   );
// };

// export default Carousel3D;

