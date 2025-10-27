import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';
import React from 'react';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = ({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={clsx(
        'rounded-xl px-4 py-2 font-medium transition-colors',
        variant === 'primary' && 'bg-black text-white hover:bg-gray-800',
        variant === 'secondary' && 'bg-gray-100 text-black hover:bg-gray-200',
        variant === 'ghost' && 'bg-transparent hover:bg-gray-100',
        className,
      )}
      {...props}
    />
  );
};
