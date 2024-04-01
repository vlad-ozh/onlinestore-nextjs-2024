import React, { useCallback } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface IProps {
  value: number;
  onBlur: (value: number) => void;
  max: number;
  className?: string;
}

export const QuantityInput: React.FC<IProps> = ({
  value,
  onBlur,
  max,
  className,
}) => {
  const [localValue, setLocalValue] = React.useState(value);

  const onBlurLocal = useCallback(() => {
    onBlur(localValue);
  }, [localValue, onBlur]);

  const signs: string[] = [',', '.', '+', '-', 'e'];

  return (
    <input
      type='number'
      value={localValue}
      step={1}
      min={1}
      max={max}
      onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
        signs.includes(event.key) && event.preventDefault()
      }
      onPaste={(e) => e.preventDefault()}
      onChange={(event) => {
        if (+event.target.value > max) {
          setLocalValue(max);
        } else if (+event.target.value < 1) {
          setLocalValue(1);
        } else {
          setLocalValue(+event.target.value);
        }
      }}
      onBlur={onBlurLocal}
      className={clsx(styles.input, className)}
    />
  );
};
