'use client';

import React from 'react';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from '@/ui';

import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const PopularProductsSlider: React.FC<IProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToScroll: 3, slidesToShow: 3 },
      },
      {
        breakpoint: 850,
        settings: { dots: false, slidesToScroll: 2, slidesToShow: 2 },
      },
      {
        breakpoint: 620,
        settings: { dots: false, slidesToScroll: 1, slidesToShow: 1 },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          arrows: false,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {children}
    </Slider>
  );
};

