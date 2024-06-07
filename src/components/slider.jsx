"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../styles/slider.scss";

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

  const setThumbsTitles = (index) => {
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
      <SwiperSlide key={`slide-${i}`} className="mainSlide" tag="li">
        <Image
          width={1500}
          height={982}
          layout="responsive"
          alt=""
          src={`/slider/slide_${i + 1}.jpg`}
          priority
        />
        <div className="slideContent">
          <div className="textContent">
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
        <div style={{ width: "52%" }}>
          <Image
            width={300}
            height={100}
            alt=""
            className="object-contain"
            layout="responsive"
            src={`/slider/thumb_${i + 1}.png`}
            priority
          />
        </div>
        <div className="thumbsContent">{setThumbsTitles(i)}</div>
      </SwiperSlide>
    );
  }

  return (
    <div>
      <div className="sliders">
        <Swiper
          className="galleryMain"
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
          className="galleryThumb"
          modules={[
            A11y,
            EffectCoverflow,
            Navigation,
            Pagination,
            Scrollbar,
            Thumbs,
          ]}
          navigation
          slidesPerView={5}
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
