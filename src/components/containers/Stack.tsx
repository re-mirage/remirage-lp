import { cn } from '@/lib/utils';
import React from 'react';

const spacingMapping: { [key: number]: string } = {
  0: 'gap-0',
  0.5: 'gap-0.5',
  1: 'gap-1',
  1.5: 'gap-1.5',
  2: 'gap-2',
  2.5: 'gap-2.5',
  3: 'gap-3',
  3.5: 'gap-3.5',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
  14: 'gap-14',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
  28: 'gap-28',
  32: 'gap-32',
  36: 'gap-36',
  40: 'gap-40',
  44: 'gap-44',
  48: 'gap-48',
  52: 'gap-52',
  56: 'gap-56',
  60: 'gap-60',
  64: 'gap-64',
  72: 'gap-72',
  80: 'gap-80',
  96: 'gap-96',
};
interface StackProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: keyof typeof spacingMapping;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  children: React.ReactNode;
  className?: string;
}

export default function Stack({
  direction = 'row',
  spacing = 0,
  alignItems = 'stretch',
  justifyContent = 'start',
  children,
  className,
}: StackProps) {
  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'column-reverse': 'flex-col-reverse',
  };

  const alignItemsClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyContentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
  };

  const spacingClasses = (spacing: number) => spacingMapping[spacing] || '';

  return (
    <div
      className={cn(
        'flex w-full',
        directionClasses[direction],
        alignItemsClasses[alignItems],
        justifyContentClasses[justifyContent],
        spacingClasses(spacing),
        className
      )}
    >
      {children}
    </div>
  );
}
