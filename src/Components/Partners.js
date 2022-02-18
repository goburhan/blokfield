import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/slider-dots.css";
import { Title } from "./StyledComponents/Text.styled";
import {
  PartnerCard,
  PartnerSection,
} from "./StyledComponents/Partners.styled";
import { Flex } from "./StyledComponents/Flex.styled";

export default function Partners() {
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  const partners = [
    { name: "partner1" },
    { name: "partner2" },
    { name: "partner3" },
    { name: "partner4" },
  ];
  return (
    <>
    <section id="partners" />
      <Flex margin="10% 0 0 0" justify="center">
        
        <Title>Partners</Title>
      </Flex>
      <br />
      <br />
      <PartnerSection>
        <Slider {...sliderSettings}>
          {partners.map((item, index) => (
            <PartnerCard>
              <img src={`/images/${item.name}.png`} />
            </PartnerCard>
          ))}
        </Slider>
      </PartnerSection>
    </>
  );
}
