'use client';

import React from 'react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface CustomArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SampleNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx(className, styles.arrow)}
      onClick={onClick}
    >
      <ChevronRightIcon />
    </div>
  );
};

const SamplePrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={clsx(className, styles.arrow)}
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </div>
  );
};

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

