"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



const Slider = ({}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [width, setWidth] = useState(0);
  const slides = [];
  const thumbs = [];

  const setThumbsTitles = (index: Number) => {
    switch (index) {
      case 0:
        return <p>SALLE DE CONFERENCE </p>;
      case 1:
        return <p>LIEUX DE CULTE</p>;
      case 2:
        return <p>TRANSPORTS</p>;
      case 3:
        return <p>SALLE DE SPECTACLE </p>;
      case 4:
        return <p>LIEUX PUBLICS</p>;
    }
  };

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} className="" tag="li">
        <Image
          width={1500}
          height={982}
          layout="responsive"
          alt=""
          src={`/slider/slide_${i + 1}.jpg`}
          priority
        />
        <div className="absolute w-full top-1/2 translate-y-[-40%] flex items-center flex-col text-white z-10">
          <div className="flex items-center justify-center flex-col">
            <p>SOLUTIONS</p>
            <h2>SONORISATIONS & AFFICHAGES</h2>
            <p>DYNAMIQUES</p>
          </div>
          <div className="buttonContainer">
            <button className="products">
              NOS <span>PRODUITS</span>
            </button>
            <button className="services">
              NOS <span>SERVICES</span>{" "}
            </button>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  for (let i = 0; i < 5; i++) {
    thumbs.push(
      <SwiperSlide key={`thumbs-${i}`} className="thumbsSlide" tag="li">
        <Image
          width="300"
          height="100"
          alt=""
          layout="responsive"
          src={`/slider/thumb_${i + 1}.png`}
        />
        <div className="thumbsContent">{setThumbsTitles(i)}</div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <div className="sliders">
        <Swiper
          modules={[
            A11y,
            EffectCoverflow,
            Navigation,
            Pagination,
            Scrollbar,
            Thumbs,
          ]}
          navigation
   
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slides}
        </Swiper>

        <Swiper
          modules={[
            A11y,
            EffectCoverflow,
            Navigation,
            Pagination,
            Scrollbar,
            Thumbs,
          ]}
          navigation
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {thumbs}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
