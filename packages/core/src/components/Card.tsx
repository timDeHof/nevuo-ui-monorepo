import React from 'react';
import { cn } from '../utils/cn';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export const Card = ({ elevated = false, className, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-2xl border border-gray-200 bg-white p-4 dark:bg-gray-900 dark:border-gray-800',
      elevated && 'shadow-soft',
      className,
    )}
    {...props}
  />
);
