'use client';

import React from 'react';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from '@/ui';

import styles from './styles.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const ProductSlider: React.FC<IProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 550,
        settings: { arrows: false },
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

