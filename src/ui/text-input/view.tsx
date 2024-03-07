import React from 'react';
import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import style from './styles.module.scss';

interface IProps {
  name: string;
  type: 'text';
  placeholder: string;
  autoComplete: 'on' | 'off';
  register: UseFormRegisterReturn;
  className?: string;
}

export const TextInput: React.FC<IProps> = ({
  type,
  name,
  autoComplete,
  register,
  placeholder,
  className,
}) => {

  return (
    <input
      {...register}
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={clsx(style.input, className)}
    />
  );
};
