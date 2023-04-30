import axios from "axios";
import md5 from "md5";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Comic from "../elements/Comic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};


export default function ComicsSlider({ comics }) {

  return (
    <>
      <Slider {...settings}>
        {comics.map((item) => (
          <Comic key={item.id} {...item} />
        ))}
      </Slider>
    </>
  );
}
