import React from "react";
import classes from "./Silder.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function Silder() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    extArrow: <FaArrowCircleRight />,
    prevArrow: <FaArrowCircleLeft />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Slider {...settings}>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img1} alt="" />
          </div>
          <h3>1</h3>
        </div>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img2} alt="" />
          </div>
          <h3>2</h3>
        </div>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img3} alt="" />
          </div>
          <h3>3</h3>
        </div>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img4} alt="" />
          </div>
          <h3>4</h3>
        </div>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img5} alt="" />
          </div>
          <h3>5</h3>
        </div>
        <div className={classes.div}>
          <div className={classes.img}>
            <img src={img6} alt="" />
          </div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
